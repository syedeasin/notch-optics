import fencyStyle from "../../assets/fencyStyle.webp";
import fencyStyleSunglasses from "../../assets/fencyStyleSunglasses.webp";
import sportsNav from "../../assets/sportsNav.webp";
import sportsSunglasses from "../../assets/sportsSunglasse.webp";
import womenNav from "../../assets/women.webp";
import menNav from "../../assets/men.webp";
import womenYoungNav from "../../assets/womenYoung.webp";
import menYoungNav from "../../assets/menYoung.webp";
import kidsNav from "../../assets/kids.webp";
import customLogoNav from "../../assets/customLogoImage.webp";
import assemblyNav from "../../assets/rx glasses assembly.jpg";
import dropshippingNav from "../../assets/dropshipping.webp";
import oemNav from "../../assets/oem.webp";

 const MenuContent = {
    eyeglassFrames: {
        categories: ["All Eyeglass Frames", "Women", "Men", "Kids", "Hot Sale", "New Arrivals"],
        images: [
            { src: fencyStyle, label: "Fancy Style" },
            { src: sportsNav, label: "Sports" },
        ],
    },
    sunglasses: {
        categories: ["All Sunglasses","Women", "Men", "Kids", "Hot Sale", "New Arrivals"],
        images: [
            { src: fencyStyleSunglasses, label: "Fancy Style" },
            { src: sportsSunglasses, label: "Sports" },
        ],
    },
    readingglasses: {
        categories: ["All Reading Glasses","Hot Sale", "New Arrivals"],
        images: [
            { src: womenNav, label: "Women" },
            { src: menNav, label: "Men" },
        ],
    },
    bluelightglasses: {
        categories: ["All Blue Light Glasses","Hot Sale", "New Arrivals"],
        images: [
            { src: womenYoungNav, label: "Women" },
            { src: menYoungNav, label: "Men" },
            { src: kidsNav, label: "kids" },
        ],
    },
    about: {
        categories: ["About Us", "Packing and Shipping", "After Sale Service"],
        images: [
            { src: customLogoNav, label: "Custom Logo" },
            { src: assemblyNav, label: "Rx Glasses Assembly" },
            { src: dropshippingNav, label: "Dropshipping" },
            { src: oemNav, label: "OEM / ODM" },
        ],
    },
};


export default MenuContent;