import crypto from 'crypto';
import Config from '../../config/Config';
export class EncryptService {
  private secret = Config.ENCRYPTION_KEY;
  private algorithm;
  private key;
  private iv;
  constructor() {
    if (!this.secret) {
      throw Error('ENCRYPTION_KEY is not set');
    }

    this.algorithm = 'aes-256-cbc';
    this.key = crypto.createHash('sha256').update(String(this.secret)).digest('base64').substring(0, 32);
    this.iv = Buffer.from('1234567890123456', 'utf8');
  }
  public encrypt(text: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  public decrypt(encryptedText: string): string {
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  public hash(text: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(text);
    return hash.digest('hex');
  }
}

export const encryptService = new EncryptService();
