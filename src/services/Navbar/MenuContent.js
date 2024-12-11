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
            { src: fencyStyle, label: "Fancy Style", url:'#' },
            { src: sportsNav, label: "Sports", url:'#' },
        ],
    },
    sunglasses: {
        categories: ["All Sunglasses","Women", "Men", "Kids", "Hot Sale", "New Arrivals"],
        images: [
            { src: fencyStyleSunglasses, label: "Fancy Style", url:'#' },
            { src: sportsSunglasses, label: "Sports", url:'#' },
        ],
    },
    readingglasses: {
        categories: ["All Reading Glasses","Hot Sale", "New Arrivals"],
        images: [
            { src: womenNav, label: "Women", url:'#' },
            { src: menNav, label: "Men", url:'#' },
        ],
    },
    bluelightglasses: {
        categories: ["All Blue Light Glasses","Hot Sale", "New Arrivals"],
        images: [
            { src: womenYoungNav, label: "Women", url:'#' },
            { src: menYoungNav, label: "Men", url:'#' },
            { src: kidsNav, label: "kids", url:'#' },
        ],
    },
    about: {
        categories: ["About Us", "Packing and Shipping", "After Sale Service"],
        images: [
            { src: customLogoNav, label: "Custom Logo", url:'./service-custom-logo' },
            { src: assemblyNav, label: "Rx Glasses Assembly", url:'#' },
            { src: dropshippingNav, label: "Dropshipping", url:'#' },
            { src: oemNav, label: "OEM / ODM", url:'#' },
        ],
    },
};


export default MenuContent;