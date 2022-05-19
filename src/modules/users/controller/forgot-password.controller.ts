import { Request, Response } from 'express';
import { CreateUserService } from "../services/create-user.service";
import { SendForgotPasswordEmailService } from '../services/send-forgot-password-email.service';

export class ForgotPasswordController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService();

    await sendForgotPasswordEmail.execute({
      email,
    });
    console.log(email)
    return response.status(204).json();
  }
}