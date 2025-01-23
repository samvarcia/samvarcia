"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Menu from "./components/Menu";
import Collage from "./components/Collage";
import Flow from "./components/Flow";
import Gallery from "./components/Gallery";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const projects = [
    {
      title: "Where's the culture?",
      description: "During my constant research on pop culture, its history, elements and essence, I began to ask myself: Where is this culture? As time went by I realized that there is no single answer and if there is, it exists in a short space of time. I transferred this feeling to a graphic piece connecting it with my admiration for western culture and the outlaws in search of “Something”.",
      mainImage: "https://utfs.io/f/QrkWx2FyjA3ZBPWpkqla6fVuz58qR1kO7rLhUYpTI9axjgbc",
      images: [
        // "https://utfs.io/f/QrkWx2FyjA3ZBPWpkqla6fVuz58qR1kO7rLhUYpTI9axjgbc",
        // Additional project images...
      ],
      tags: ["Graphic Design", "Print",]
    },
    {
      title: "Location a la mode SS25 Website",
      description: "The idea of a party for only models (or you can only be invited by a model) at fashion week is a great design challenge. In my first season as a designer in the team I collaborated in the construction of the visual identity of the landing page, check in menu and different graphic resources. The result demonstrates our goal, to introduce us to the industry by showing the things that matter to us, details, taste and culture.",
      websiteUrl: "https://locationalamode.com", // Add this line
      mainImage: "https://utfs.io/f/QrkWx2FyjA3ZFgVSrBIoaiXdqm9LnwZYNuES2gotCBxRVU0I",
      images: [
        "https://utfs.io/f/QrkWx2FyjA3ZFgVSrBIoaiXdqm9LnwZYNuES2gotCBxRVU0I",
        // Additional project images...
      ],
      tags: ["Graphic Design", "Web Design", "Web Development"]
    },
    {
      title: "Location a la mode SS25 WristBand",
      description: "The moment I knew we had to design a wristband for the event I found an opportunity to do something different, most events give ugly and forgettable wristbands. With this in mind I thought of a design that was in line with the current objectives of the brand and could differentiate us. The models loved it ",
      mainImage: "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZBRzeQHa6fVuz58qR1kO7rLhUYpTI9axjgbcm",
      images: [
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZFCiJzEoaiXdqm9LnwZYNuES2gotCBxRVU0Il",
        // Additional project images...
      ],
      tags: ["Graphic Design", "Garment Design",]
    },
    {
      title: "Nautilus 2025 Website & Brand",
      description: "Nautilus helps young people develop their passions in community with a 3 month program in San Francisco CA. Developers, artist, designers and more together doing what they are passionate about. With this spirit in mind and working closely with the founder Zelda Poem, created a visual language that comunicates the light, hopeful and commanding values of the project.",
      websiteUrl: "https://www.nautilus.quest/", // Add this line
      mainImage: "https://utfs.io/f/QrkWx2FyjA3ZUD42OWLRNaXMPTp1mdr79VfSOABUE4qZKHei",
      images: [
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZvviEBm2ex82Ha5wN9nCJo3fZIE1LYKXcTrzu",
        // Additional project images...
      ],
      tags: ["Graphic Design", "Web Design", "Web Development", "Branding"]
    },
    {
      title: "W&M'S Keychain",
      description: "Inspired by the work of the proactive cultural aware Whak&Mo twins and their use of logos, designed this interpolation that led to our collaboration in the design of this keychain accesory",
      mainImage: "https://utfs.io/f/QrkWx2FyjA3ZbTeN7Xn0RrXaSTf5vnwyFM2eQc3WEjdmpD7k",
      images: [
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Z7oeYIkA1uU4T0G3fIWvtlpicREP8X5MezCkb",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Zk01c5BX21OX4lct6IH7NMDQuJgF3hzCVp5Zi",
        // Additional project images...
      ],
      tags: ["Graphic Design", "Accesorie Design"]
    },
    {
      title: "The Circle Brand",
      description: "The Circle is a community of people doing stuff that they like, where they share stories of what is behing their creations and reflect on others,, from all around the world and all types of disciplines. With this in mind designed the Brand, focusing on the gathering of humans and their sharings.",
      mainImage: "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Zvg807o2ex82Ha5wN9nCJo3fZIE1LYKXcTrzu",
      images: [
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Zx2teVYWDCylp7sPqo0fNaIrUkSExjLh1e45b",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Zt0jVrkuh9ep2bZ43VafEOBTnkNi1CGlzgWrx",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZkCQQ9tZX21OX4lct6IH7NMDQuJgF3hzCVp5Z",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZQpBDMkFyjA3ZWBf8TiIan4RsYXc9oCPvOgSl",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Zx2RFLTfDCylp7sPqo0fNaIrUkSExjLh1e45b",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZbrA4rYn0RrXaSTf5vnwyFM2eQc3WEjdmpD7k",
        // Additional project images...
      ],
      tags: ["Graphic Design", "Branding"]
    },
    {
      title: "Hot Sauce",
      description: "Collaboration with “A Dedicated Studio” in assisting the development of the Hot Sauce website with the implementation of an interactive sound effect.",
      websiteUrl: "https://hot-sauce-presents-staging.webflow.io/", // Add this line

      mainImage: "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZjMV0b4wmOulUbQRTDxdAscXfPMyn1v9S4E7j",
      images: [
      ],
      tags: ["Development Assistance",]
    },
    {
      title: "Hunter T-shirt",
      description: "The use of thermal cameras and how they deform bodies inspired me to create this T-shirt.",
      mainImage: "https://utfs.io/f/QrkWx2FyjA3ZTGrU7ms3MaC3xVm9dseWkOnu52FiItyo1bwg",
      images: [
        // "https://utfs.io/f/QrkWx2FyjA3ZTGrU7ms3MaC3xVm9dseWkOnu52FiItyo1bwg",
        // Additional project images...
      ],
      tags: ["Graphic Design", "Garment Design"]
    },
    {
      title: "2sday Supper Club",
      description: "Collaboration with “A Dedicated Studio” in assisting the development of the 2sday Supper Club site integrating the Instagram API into their layout.",
      websiteUrl: "https://www.2sdaysupperclub.com/",
      mainImage: "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZhhXFqwlpAFkYz96VoeyNPKalDJGrS7ILUOsd",
      images: [
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZOvR0D1axUW90Ccbl7EAS4aVQXZgDydvzRJOk",
        // Additional project images...
      ],
      tags: ["Development Assistance",]
    },
    {
      title: "Champain Champagne",
      description: "All the pain athletes go through is rewarded with champagne at their moment of glory, mixing this with the literal shape of a trophy resulted in this design.",
      mainImage: "https://utfs.io/f/QrkWx2FyjA3ZooCRAHVjIkzwtVSLlCDpiT7MnPNqsG9uefmY",
      images: [
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZVfDKm7g3Ak5mJ0sRcCT2EZf4rGtvLbK1zDjw",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Zu1YPKNSUIN6SQdBPnmg1CcZa4RH2tUohflOA",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3ZsF884TNdHVkBWOXxwv906PEbCGIlDmc538qM",
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Z2mzP9Df7JMlzwnKvQPpxN3ShUjkDbIA5fBog",
        // Additional project images...
      ],
      tags: ["Graphic Design", "3D Design", "Branding"]
    },
    {
      title: "Pearson Sound Website",
      description: "Collaboration with “A Dedicated Studio” in assisting the development of the Pearson Sound site, integrating the Resident Advisor API was crucial to show the current list of upcoming gigs of the artist",
      websiteUrl: "https://www.pearsonsound.com/",
      mainImage: "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Z4MWCcb51WkPLHQKXFNZamtp76wciY0d2JRCr",
      images: [
        // "https://utfs.io/f/QrkWx2FyjA3Zn7EvJmfJtlKdSQUsFRcHgDqa2OeMiZf9WXmE",
        // Additional project images...
      ],
      tags: ["Development Assistance",]
    },
    {
      title: "Bloop Browser",
      description: "I collaborated with the startup Bloop in the creation of their landing page and initial branding. I was also part of the Techstars program in which I expanded my knowledge in the startup and venturing world.",
      mainImage: "https://utfs.io/f/QrkWx2FyjA3ZdbZmhdPNnb9WylKgp1UjB6vrcsa075eXLPzV",
      images: [
        "https://6q3qtzvyuz.ufs.sh/f/QrkWx2FyjA3Z2wzWfL7JMlzwnKvQPpxN3ShUjkDbIA5fBog9",
        // Additional project images...
      ],
      tags: ["Web Design", "Web Development", "Branding"]
    },
    {
      title: "PlayBoy T-shirt",
      description: "The juxposition of playboy and playdoh's brand led me to combine them.",
      mainImage: "https://utfs.io/f/QrkWx2FyjA3Z5SzCinrsxEn13oaTjFzPRl7XrSgwuDLZiH0Q",
      images: [
        // "https://utfs.io/f/QrkWx2FyjA3Z5SzCinrsxEn13oaTjFzPRl7XrSgwuDLZiH0Q",
        // Additional project images...
      ],
      tags: ["Web Design", "Web Development", "Branding"]
    },
    // Additional projects...
  ];
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Menu />
        <Gallery projects={projects}/>
      </motion.div>
    </main>
  );
}
