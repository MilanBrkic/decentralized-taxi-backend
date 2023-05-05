export class Sleep {
  public static async seconds(s: number): Promise<void> {
    return this.milliseconds(s * 1000);
  }

  public static async milliseconds(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
