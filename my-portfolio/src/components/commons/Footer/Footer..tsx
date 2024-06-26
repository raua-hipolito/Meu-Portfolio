import Image from "next/image";

function Footer() {
    return (
        <div className="px-3 py-3">
        <footer className="border-t-[3px] border-opacity-70 px-4 py-3 flex justify-between">
            <strong className="text-xl">Rauã Hipólito</strong>
            <div className="flex items-center gap-4" >
                <a href="https://github.com/raua-hipolito" target="_blank" >
                    <Image src="/github.png" alt="GitHub" width={26} height={26}
                    />
                </a>
                <a href="https://www.linkedin.com/in/devrauahipolito/" target="_blank">
                    <Image src="/linkedin.png" alt="LinkedIn" width={26} height={26} />
                </a>
                <a href="https://www.instagram.com/__rhipolito/" target="__blank">
                    <Image src="/instagram.png" alt="Instagram" width={26} height={26} />
                </a>
            </div>
        </footer>            
        </div>
    )
}

export default Footer;