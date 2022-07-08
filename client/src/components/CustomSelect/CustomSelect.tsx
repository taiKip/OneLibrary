import Select from 'react-select'
import { selectOptionsType } from '../../types'

const CustomSelect = ({ options, handleSelect }: { options: selectOptionsType[], handleSelect: (value: selectOptionsType[]) => void }) => {
    //@ts-igonre
    const handleChange = (obj:any) => {
     
        const list = obj.map((item: selectOptionsType) => item.value);
        handleSelect(list)
}
    return (
      
        <Select options={options} isMulti={true} onChange={handleChange} />
      
    );
}

export default CustomSelect