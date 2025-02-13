import Link from "next/link";

const workHistory = [
  {
    company: "Permanenet Data Solutions, Inc.",
    title: "Head of Ecosystem",
    startDate: "Sep, 2024",
    endDate: "current",
    url: "https://pds.inc",
    descriprtion:
      "Decentralizing access to Arweave with AR.IO Network. Supporting builders and founders to build a better and more decentralised future on the permanent web.",
  },
  {
    company: "P3RKS",
    title: "Founder",
    startDate: "July, 2022",
    endDate: "current",
    url: "https://perks.xyz/",
    descriprtion: "Tried to create a token gated benefits platform for DAOs",
  },
  {
    company: "Developer DAO",
    title: "Dir, Foundation",
    startDate: "Sep, 2021",
    endDate: "current",
    url: "https://pds.inc",
    descriprtion:
      "Early contributor and foundation director, focused on ops, partnerships and governance. Forever my spitirual home in web3.",
  },
  {
    company: "Growable",
    title: "Founder",
    startDate: "May, 2019",
    endDate: "current",
    url: "https://growable.io/",
    descriprtion:
      "Established events brand in London under Talent Point. Worked with Cazoo, MADE.com and many more to plan and host events to attract new technical talent.",
  },
  {
    company: "Talent Point",
    title: "Head of Growth",
    startDate: "Oct, 2013",
    endDate: "current",
    url: "https://talentpoint.co",
    descriprtion:
      "Started as 360 recruiter working with the c-suite of London's premier start-ups to estbalish and grow technical teams quickly and sustainably. Promoted consistently, final role as Head of Growth where I led rebrand and rebuild of website, implented and automated first real sales pipeline that drove mulitple 6 figures in revenue.",
  },
];

export const metadata = {
  title: "work",
  description: "",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {metadata.title}
      </h1>
      <div>
        {workHistory.map((work, index) => (
          <div className="mb-8">
            <a
              key={work.title}
              className="flex flex-col space-y-1"
              href={work.url}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-0 mb-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {work.startDate}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {work.title + " @ " + work.company}
                </p>
              </div>
              <div>
                <p className="font-extralight">{work.descriprtion}</p>
              </div>
            </a>
            {/* <span className="italic">
                {work.startDate + " - " + work.endDate}
              </span> */}
          </div>
        ))}
      </div>
    </section>
  );
}
