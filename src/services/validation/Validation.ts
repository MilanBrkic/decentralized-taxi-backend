import { AnySchema } from 'joi';

export class JoiValidation {
  public static validate(schema: AnySchema, value: any, allowUnknown = true): any {
    const result = schema.validate(
      value,
      allowUnknown
        ? {
            allowUnknown: true,
          }
        : {}
    );
    if (!result.error) {
      return result.value;
    }
    throw result.error;
  }
}
