// Creating Company Profile Logo
const companyProfileLogoUpload = () => {
    // setShow(true);
    const apiUrl = "http://localhost:5000/api/company/profile/logo";


    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((res) => {
        getDownloadURL(imageRef).then((url) => {
            const companyProfileLogo = {
                logo: url,
                userId: userId.id,
            };

            try {
                axios.post(apiUrl, companyProfileLogo).then((res) => {
                    setComapnyLogoModel(false);
                    setShow(false);
                    getCompanyInfo();
                    toast.info("Company Profile Logo Added Successfully ...");
                });
            } catch (error) {
                console.log("Errors", error);
            }
        });
    });
};