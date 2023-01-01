import { IsInt, isInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    // isInt, IsPositive, min 1
    @IsInt()
    @Min(1)
    @IsPositive()
    no: number;

    // isString, Minlenth 1
    @IsString()
    @MinLength(1)
    name: string;

}
