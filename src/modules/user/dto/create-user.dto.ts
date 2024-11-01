import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'User name',
        example: 'Nguyen cute',
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'User email',
        example: 'abc@example.com',
    })
    email: string;
}
