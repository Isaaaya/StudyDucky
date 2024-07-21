import { IUser } from "@/interfaces/user.interface";

const useGetUserAchievements = (user: IUser) => {
    const achievements = [
        {
            title: 'Activist',
            icon: require('../assets/achievementsIcons/award.png'),
            isAchieved: !!user?.customFlashcardSets && (user?.customFlashcardSets?.length >= 10),
            tooltip: 'To unlock the achievement, get 10 custom flashcard sets.'
        },
        {
            title: 'Enthusiast',
            icon: require('../assets/achievementsIcons/hands.png'),
            isAchieved: !!user?.interests && (user?.interests?.length >= 10),
            tooltip: 'To unlock the achievement, get 10 and more insterests.'
        },
        {
            title: 'Academic',
            icon: require('../assets/achievementsIcons/hat.png'),
            isAchieved: !!user.completedExerciseSets && user.completedExerciseSets?.length >= 7,
            tooltip: 'To unlock the achievement, complete 7 exercise sets.'
        },
        {
            title: 'Headstrong',
            icon: require('../assets/achievementsIcons/rocket.png'),
            isAchieved: !!user.completedExerciseSets && user.completedExerciseSets?.length >= 10 && !!user.customFlashcardSets && user.customFlashcardSets?.length >= 10,
            tooltip: 'To unlock the achievement, complete 10 exercise sets and create 10 custom flashcard sets.'
        },
        {
            title: 'Philomath',
            icon: require('../assets/achievementsIcons/star.png'),
            isAchieved: !!user.completedExerciseSets && user.completedExerciseSets?.length >= 10,
            tooltip: 'To unlock the achievement, complete 10 exercise sets.'
        },
    ];

    return {achievements};
}

export default useGetUserAchievements