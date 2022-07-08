import { useState ,useEffect} from "react"

const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      setDebouncedValue(value)
      const timeOut=  setTimeout(() => {
        
    },delay)
      return () => {
        clearTimeout(timeOut)
      }
    }, [value,delay])
    
    return debouncedValue;
}

export default useDebounce