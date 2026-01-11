export const blueprints = [
    {
        id: 1,
        title: "Sashiko Repair Service",
        artist: {
            name: "Yuki Stitch",
            avatar: "https://placehold.co/100x100/121212/CCFF00?text=YS",
        },
        price: "₹45 + Shipping",
        beforeImage: "https://placehold.co/400x500/333/FFF?text=Torn+Jeans",
        afterImage: "https://placehold.co/400x500/121212/CCFF00?text=Sashiko+Denim",
        tags: ["#Denim", "#Streetwear", "#Embroidery"],
        slots: 2,
        maxSlots: 10,
    },
    {
        id: 2,
        title: "Cyberpunk Patchwork",
        artist: {
            name: "NeoThread",
            avatar: "https://placehold.co/100x100/121212/00FFCC?text=NT",
        },
        price: "₹60 + Shipping",
        beforeImage: "https://placehold.co/400x500/444/FFF?text=Plain+Jacket",
        afterImage: "https://placehold.co/400x500/121212/00FFCC?text=Cyber+Jacket",
        tags: ["#Jackets", "#Patchwork", "#Techwear"],
        slots: 5,
        maxSlots: 8,
    },
    {
        id: 3,
        title: "Acid Wash Remix",
        artist: {
            name: "RetroFade",
            avatar: "https://placehold.co/100x100/121212/FF00CC?text=RF",
        },
        price: "₹35 + Shipping",
        beforeImage: "https://placehold.co/400x500/555/FFF?text=Dark+Tee",
        afterImage: "https://placehold.co/400x500/121212/FF00CC?text=Acid+Wash",
        tags: ["#Tees", "#Dye", "#Vintage"],
        slots: 8,
        maxSlots: 20,
    },
];

export const styles = [
    { id: 'acid', name: 'Acid Wash', image: 'https://placehold.co/150x150/111/CCFF00?text=Acid' },
    { id: 'patch', name: 'Patchwork', image: 'https://placehold.co/150x150/111/00FFCC?text=Patch' },
    { id: 'dye', name: 'Tie-Dye', image: 'https://placehold.co/150x150/111/FF00CC?text=Dye' },
    { id: 'distress', name: 'Distressed', image: 'https://placehold.co/150x150/111/FFFF00?text=Distress' },
];

export const stats = [
    { label: "Lbs Saved", value: "1,240" },
    { label: "Items Flipped", value: "850" },
    { label: "Active Artists", value: "120" },
];
