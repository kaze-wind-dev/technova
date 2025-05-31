

export const dateFormat= (date : string) =>  {
    return  new Date(date).toLocaleDateString("ja-JP").split("/").join(".")
};
