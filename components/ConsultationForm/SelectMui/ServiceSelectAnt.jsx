import { Select } from 'antd';
import { useState } from 'react';
const OPTIONS = [
    { value: 'YouTube Consultation', label: 'YouTube Consultation', key: 'youtube_consultation' },
    { value: 'YouTube Niche Selection', label: 'YouTube Niche Selection', key: 'youtube_niche_selection' },
    { value: 'YouTube Content Creation', label: 'YouTube Content Creation', key: 'youtube_content_creation' },
    { value: 'YouTube Keywords Research', label: 'YouTube Keywords Research', key: 'youtube_keywords_research' },
    { value: 'YouTube SEO', label: 'YouTube SEO', key: 'youtube_seo' },
    { value: 'YouTube Automation', label: 'YouTube Automation', key: 'youtube_automation' },
    { value: 'YouTube Channel Monetization', label: 'YouTube Channel Monetization', key: 'youtube_channel_monetization' },
    { value: 'YouTube Promotion', label: 'YouTube Promotion', key: 'youtube_promotion' },
    { value: 'YouTube ADs', label: 'YouTube ADs', key: 'youtube_ads' },
    { value: 'YouTube Channel Management', label: 'YouTube Channel Management', key: 'youtube_channel_management' },
    { value: 'Select All', label: 'Select All', key: 'select_all' },
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
            options={filteredOptions.map((item, index) => ({
                value: item.value,
                label: item.label,
                key: index // add a unique key for each option
            }))}

        />
    );
};
export default Antselect;