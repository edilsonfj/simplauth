import { Injectable } from '@nestjs/common';

@Injectable()
export class EncryptionService {
  private readonly saltRounds = 10;

  async hashPassword(password: string): Promise<string> {
    const bcrypt = await import('bcrypt-ts');
    return bcrypt.hashSync(password, bcrypt.genSaltSync(this.saltRounds));
  }

  async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const bcrypt = await import('bcrypt-ts');
    return bcrypt.compareSync(plainPassword, hashedPassword);
  }
}
