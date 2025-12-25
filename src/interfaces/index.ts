export interface ICourses{
        id:number,
        title:string,
        time?:string,
        shortDescription:string,
        fullDescription:string,
        language?:string,
        Category?:string,
        duration?:string,
        instructor?:string,
        price:number,
        days?:string[],
        lessonsCount:number,
        level:"Beginner" | "Intermediate"|"Advanced",
}

export interface ITestimonials {
        id: number;
        name: string;
        role: string;
        company: string;
        avatar: string;
        rating: number;
        comment: string;
        date: string;
}