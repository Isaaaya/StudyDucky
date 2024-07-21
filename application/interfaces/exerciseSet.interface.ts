export interface IExerciseSet {
    _id: string,
    title: string,
    tip: string,
    icon?: string,
    exercises?: {
        _id?: string,
        type?: 'translate' | 'connect' | 'choose' | 'listen',
        correctAnswer?: string,
        answerOptions?: string[],
        wordForTranslation?: string,
        phraseParts?: {
            part1?: string,
            part2?: string,
        }
    }[]
}