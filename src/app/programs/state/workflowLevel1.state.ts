import { IProgram } from '../../model/program';

export interface IProgramState {
    programs: IProgram[];
    selectedProgram: IProgram;
}

export const initialProgramState: IProgramState = {
    programs: null,
    selectedProgram: null
};
