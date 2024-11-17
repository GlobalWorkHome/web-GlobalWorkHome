import PreSubscriptionBenefits from '@/components/PreSubscriptionBenefits'
import { WaitListForm } from "@/components/WaitListForm";
import Image from "next/image";

export default function Home() {   

    return (
        <>
            <header className="bg-[url(/images/pexels-edmond-dantes-4340037.jpg)] h-screen">
                <div className="bg-black/80 w-full h-full">
                <div className="container h-full flex items-center">
                    <div>
                        <figure className="w-36 sm:w-48 mb-6">
                            <Image
                                src="/images/logo-white.svg"
                                alt="Gobal Work Home"
                                width={200}
                                height={70}
                                className="w-full h-full"
                            />
                        </figure>
                        <h1 className="text-white text-4xl font-bold md:text-6xl lg:text-8xl mb-3">Find Remote jobs</h1>
                        <p className="text-white text-xl md:text-2xl font-semibold">Subscribe to enter the waitlist</p>
                        <WaitListForm />
                        <p className="text-white text-sm">By clicking subscribe you agree to our Terms & Conditions</p>
                    </div>
                </div>
                </div>
            </header>     
            <section>
                <PreSubscriptionBenefits />
            </section>   
        </>
    );
}


