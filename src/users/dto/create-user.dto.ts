import {IsNotEmpty , IsEmail, MinLength, MaxLength, IsEmpty} from 'class-validator'
export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(5)
    name: string
    @MinLength(5)
    @MaxLength(5)
    password: string;
    @IsEmail()
    @IsEmpty()
    email: string;
    birthday: string
    default:boolean
    confirm:string
}
