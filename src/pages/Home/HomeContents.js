import eyeGlassesCategoryImg from "../../assets/Eyeglasses_Frames.webp";
import sunglassCategoryImg from "../../assets/Sunglasses.webp";
import rxLensesCategoryImg from "../../assets/Rx_Lens_1.webp";
import blueLightCategoryImg from "../../assets/Blue_Light.webp";
import readingGlassesCategoryImg from "../../assets/Reading_Glasses.webp";
import accessoriesCategoryImg from "../../assets/Accessories_1.webp";
import serviceImg1 from "../../assets/serviceImg1.webp";
import serviceImg2 from "../../assets/serviceImg2.webp";
import serviceImg3 from "../../assets/serviceImg3.webp";
import serviceImg4 from "../../assets/serviceImg4.webp";

const HomeContents = {
    categoriesSection: [
        {
            label: "Eyeglass Frames",
            url: "#",
            featuredImage: eyeGlassesCategoryImg
        },
        {
            label: "Sunglasses",
            url: "#",
            featuredImage: sunglassCategoryImg
        },
        {
            label: "Rx Lenses",
            url: "#",
            featuredImage: rxLensesCategoryImg
        },
        {
            label: "Blue Light Blocking Glasses",
            url: "#",
            featuredImage: blueLightCategoryImg
        },
        {
            label: "Reading Glasses",
            url: "#",
            featuredImage: readingGlassesCategoryImg
        },
        {
            label: "Accessories",
            url: "#",
            featuredImage: accessoriesCategoryImg
        }
    ],
    aboutSection: {
        // Additional data for the about section can be added here
    },
    serviceSection: [
        {
            label: "Custom Logo",
            description: "MOQ 1 pair customized logo, create your own eyewear brand.",
            url: "#",
            featuredImage: serviceImg1
        },
        {
            label: "Rx Glasses Assembly",
            description: "10+ years of experience in professional prescription glasses assembly.",
            url: "#",
            featuredImage: serviceImg2
        },
        {
            label: "OEM / ODM",
            description: "Order production of the styles you want, MOQ only 500 pairs per model.",
            url: "#",
            featuredImage: serviceImg3
        },
        {
            label: "Dropshipping",
            description: "Provide professional packing and international transportation solutions.",
            url: "#",
            featuredImage: serviceImg4
        },
    ],
    testimonialsSec: [
        {
            name: "John Gill",
            country: "United States",
            flag: "🇺🇸",
            title: "Excellent Supplier",
            review: "Wohu has been the best optical supplier I have worked with in the past 14 years. Excellent product, great customer service, good order fill and very competitive pricing. Our company has now placed six separate multi-product orders. FIVE STAR review on every order is what we say over here in the US.",
        },
        {
            name: "Friney Labranche",
            country: "Netherlands",
            flag: "🇨🇦",
            title: "Very satisfied",
            review: "The glasses that I ordered arrived very very quickly. Less than one week to receive in Canada. They were packaged securely and there was no concern that any were received damaged. The quality of the glasses is great. The customization of my logo on the arm of the glasses is done very well.",
        },
        {
            name: "Olga Swartsenburg",
            country: "Canada",
            flag: "🇳🇱",
            title: "Fast Delivery",
            review: "Surprised by the speed! 2 weeks after payment I already received a parcel with a printed logo. Bravo! For some suppliers, this process takes 3-4 months. Thanks for the speed, it's really very important!",
        },
        {
            name: "Ashley Malone",
            country: "United States",
            flag: "🇳🇱",
            title: "Fast Delivery",
            review: "Very impressed with the quality of these frames. They are beautiful and the customization came out great. Lydia is excellent to work with and kept me up to date on my order. I would definitely do business with this supplier again.",
        },
        {
            name: "Cindy Kerr",
            country: "Australia",
            flag: "🇳🇱",
            title: "Good experience",
            review: "They have many beautiful frames to suit a varying array of style and fashion trends. The service was also very good. They are patient and good at explaining the process and best practices when ordering. They are open to resolve any questions or issues. I am very impressed.",
        },
    ]
};

export default HomeContents;
