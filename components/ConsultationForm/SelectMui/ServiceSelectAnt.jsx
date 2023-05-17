import { Select } from 'antd';
import { useState } from 'react';
const OPTIONS = [
    "YouTube Consultation",
    "YouTube Niche Selection",
    "YouTube Content Creation",
    "YouTube Keywords Research",
    "YouTube SEO",
    "YouTube Automation",
    "YouTube Channel Monetization",
    "YouTube Promotion",
    "YouTube ADs",
    "YouTube Channel Management",
    "Select All"
];





const Antselect = ({ setFormData, value, formData }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    const handleChange = (selectedValues) => {
        setSelectedItems(selectedValues);
        setFormData({ ...formData, ['services']: selectedValues });
    };



    return (
        <Select
            mode="multiple"
            placeholder="Please Select the Services"
            value={selectedItems}
            onChange={handleChange}
            style={{
                minWidth: '200px',

            }}
            // inputHeight={300}
            options={filteredOptions.map((item) => ({
                value: item,
                label: item,
            }))}
        />
    );
};
export default Antselect;