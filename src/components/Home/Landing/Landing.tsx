import {ButtonText} from "@/components/Home/Landing/ButtonText"
import {DuckSplash} from "@/components/Home/Landing/DuckSplash"
import {LandingHeading} from "@/components/Home/Landing/LandingHeading"

export const Landing = () => {
  return (
    <section className="space-y-8 bg-PED-yellow py-12 md:space-y-14 md:py-16">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="w-[270px] md:mr-12 md:w-[322px]">
          <DuckSplash/>
        </div>
        <div className="mt-6 flex flex-col items-center text-center md:mt-0 md:items-start md:text-left">
          <LandingHeading/>
          <p className="md:text-sub-heading text-2xl font-medium">
            ช่วยทุกคน <br/>
            กาบัตรเลือกตั้งของตัวเอง <br/>
            ได้อย่างมั่นใจ !
          </p>
          <p className="text-tagline mt-4 md:mt-2">
            จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ <br/>
            และรวบรวมข้อมูลที่จำเป็นต่าง ๆ <br/>
            เกี่ยวกับการเลือกตั้ง
          </p>
          <a className="mt-2 underline">โดย First Voter</a>
        </div>
      </div>
      <button className="mx-auto flex items-center space-x-4 rounded-2xl bg-PED-orange px-5 pb-4 pt-2">
        <ButtonText/>
        <div className="mt-3 space-x-3 text-2xl font-semibold text-white">
          <span>อีก</span>
          <span className="text-4xl">30</span>
          <span>วัน</span>
        </div>
      </button>
    </section>
  )
}