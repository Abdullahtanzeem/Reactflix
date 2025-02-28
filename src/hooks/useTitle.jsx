import { useEffect } from "react";
export const useTitle = (title) => {
  
    useEffect(() => {
        document.title= `${title} / Reactflix`
      }, [title]);

    return null;
}
