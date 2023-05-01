import { LinkButton } from "@/components/common/Home/Button"
import Image from "next/image"

const InfoSteps = [
  { no: 1, title: "ตรวจสอบสิทธิ์การเลือกตั้ง" },
  { no: 2, title: "จดจำหมายเลขของผู้สมัครรับเลือกตั้งประเภทต่าง ๆ" },
  { no: 3, title: "ตรวจชื่อ-สกุลและจดจำเลขลำดับของตน" },
  { no: 4, title: "แจ้งเลขลำดับของตนเองให้กับเจ้าหน้าที่" },
  {
    no: 5,
    title: "ยื่นหลักฐานแสดงตัวตนให้กับเจ้าหน้าที่",
    description: "(บัตรประชาชน/ใบขับขี่/พาสปอร์ต/บัตรจากแอป ThaiID)",
  },
  { no: 6, title: "ลงลายมือชื่อหรือพิมพ์ลายนิ้วหัวแม่มือ" },
  { no: 7, title: "คุณจะได้บัตรลงคะแนนเสียงมา 2 ใบ เข้าคูหาเพื่อกา" },
  { no: 8, title: "พับบัตรเพื่อหย่อนลงในหีบใส่บัตร", description: "พับให้มิดชิด ห้ามทำสัญลักษณ์" },
  { no: 9, title: "นำบัตรที่พับหย่อนลงในหีบใส่บัตร" },
]

export default function Recap() {
  return (
    <section className="min-h-screen w-full bg-PED-green">
      <div className="mx-auto flex w-full flex-col gap-4 px-4 py-12 md:px-10">
        <div className="mb-4 grid w-full grid-cols-2 items-end justify-between sm:flex">
          <h1 className="pr-4 text-2xl font-medium text-white md:text-3xl">ขั้นตอนการลงคะแนนเสียง</h1>

          <LinkButton
            className="px-2 py-1.5 text-center text-base sm:py-2.5 sm:px-10 sm:text-lg"
            link="/"
            text="เข้าใจแล้ว !"
          />
        </div>

        <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-4">
          <div className="grid grid-cols-2 justify-center gap-6 md:col-span-3 md:grid-cols-3">
            {InfoSteps.map((step) => (
              <div
                key={step.no}
                className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-center shadow-2xl ring-1 ring-PED-purple-secondary/10 transition-all duration-500 ease-out hover:scale-[101%] hover:ring-8"
              >
                <p className="text-xl font-medium text-PED-orange">{step.no}</p>

                <p className="text-lg font-medium text-PED-purple">{step.title}</p>
                {step.description && <p className="text-sm font-light text-PED-purple">{step.description}</p>}
              </div>
            ))}
          </div>

          <div className="mx-auto flex w-full max-w-sm flex-col gap-2 rounded-xl bg-PED-purple-secondary p-6 text-white shadow-2xl ring-1 ring-PED-purple-secondary/10 transition-all duration-500 ease-out hover:scale-[101%] hover:ring-8 md:max-w-full">
            <div className="flex items-center justify-center gap-2 font-medium text-PED-yellow">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-PED-orange text-lg font-medium text-white">
                ?
              </div>

              <p className="text-base">กายังไงไม่ให้บัตรเสีย</p>
            </div>

            <div className="mt-3 flex flex-col gap-3 text-sm font-light text-white">
              <p className="font-normal">หลักการทำเครื่องหมายลงบนบัตรเลือกตั้ง</p>

              <ol className="list-decimal px-4">
                <li>
                  ให้ทำเครื่องหมาย <span className="font-medium">กากบาท</span> ลงในช่องที่กำหนดเพียง 1 ช่องเท่านั้น
                </li>
                <li>
                  ห้ามทำเครื่องหมายอื่นหรือเขียนข้อความอื่นนอกจาก <span className="font-medium">กากบาท</span>{" "}
                  ลงบนบัตรเลือกตั้ง
                </li>
              </ol>
            </div>

            <div className="my-4 flex flex-col gap-2">
              <span className="rounded-full bg-PED-green px-1 py-2 text-center text-sm font-normal text-white">
                ตัวอย่างการกากบาทที่ถูกต้อง
              </span>

              <Image
                className="mt-2"
                src="/images/simulator/marking/good.png"
                width={600}
                height={200}
                alt="good marking"
              />
            </div>

            <div className="my-2 flex flex-col gap-2">
              <span className="rounded-full bg-PED-orange px-3 py-2 text-center text-sm font-normal text-white">
                ตัวอย่างการกากบาทที่ผิด
              </span>

              <Image
                className="mt-2"
                src="/images/simulator/marking/bad.png"
                width={600}
                height={200}
                alt="bad marking"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
