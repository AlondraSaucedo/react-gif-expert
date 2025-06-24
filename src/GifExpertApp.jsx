import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hello Kitty']);
    const onAddCategory = (onNewCategory)=>{
        if (categories.includes(onNewCategory)) return;
        setCategories([onNewCategory,...categories]);
    }

    return (
        <>
            <h1>Gift Expert</h1>
            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)} 
            />

            {
                categories.map((category) => (
                    <GifGrid key={category}
                    category={category} />
                ))
            }
        </>
    )
}

export default GifExpertApp