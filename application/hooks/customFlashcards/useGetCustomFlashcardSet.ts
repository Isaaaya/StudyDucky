import {  useEffect, useState } from "react"
import useGetCustomFlashcardSets from './useGetCustomFlashcardSets';
import {IFlashcardSet} from '@/interfaces/flashcardSet.interface'

const useGetCustomFlashcardSet = (id: string) => {
    const {customFlashcardSets} = useGetCustomFlashcardSets();
    const [customFlashcardSet, setCustomFlashcardSet] = useState<IFlashcardSet>({
        _id: '', 
        title: '', 
        words: [{
            english: '', ukrainian: '', _id: ''
        }]
    });

    useEffect(() => {
        const flashcardSet = customFlashcardSets.find((element) => element._id === id);
        if (flashcardSet) {
            setCustomFlashcardSet(flashcardSet as IFlashcardSet);
        }
    }, [customFlashcardSets])
    

    return {customFlashcardSet};
}

export default useGetCustomFlashcardSet