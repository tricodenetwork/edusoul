import { Home as Homes } from "@mui/icons-material";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ChristianEducationUnit2 from "@/components/courses/advanced-classroom-assistant/heart-foundation/Unit2";
import ChristianEducation from "@/components/courses/advanced-classroom-assistant/heart-foundation/Unit1";
import Unit1 from "@/components/courses/advanced-classroom-assistant/aims-of-christain-education/Unit1";
import Unit2 from "@/components/courses/advanced-classroom-assistant/aims-of-christain-education/Unit2";
import ChristCenteredUnit1 from "@/components/courses/advanced-classroom-assistant/christ-centered/Unit1";
import ChristCenteredUnit2 from "@/components/courses/advanced-classroom-assistant/christ-centered/Unit2";
import EducationAndStandardsUnit1 from "@/components/courses/diploma-in-christian-education/acts-of-education-and-standards/Unit1";
import AimsOfChristianEducation1 from "@/components/courses/diploma-in-christian-education/aims-of-christian-education/Unit1";
import AimsOfChristianEducation2 from "@/components/courses/diploma-in-christian-education/aims-of-christian-education/Unit2";
import DiplomaInChristCenteredUnit1 from "@/components/courses/diploma-in-christian-education/christ-centered-education/Unit1";
import DiplomaInChristCenteredUnit2 from "@/components/courses/diploma-in-christian-education/christ-centered-education/Unit2";
import DiplomaInChristCenteredUnit3 from "@/components/courses/diploma-in-christian-education/christ-centered-education/Unit3";
import DiplomaInChristianEducationUnit1 from "@/components/courses/diploma-in-christian-education/heart-foundation/Unit1";
import DiplomaInChristianEducationUnit2 from "@/components/courses/diploma-in-christian-education/heart-foundation/Unit2";
import DiplomaInChristianEducationUnit3 from "@/components/courses/diploma-in-christian-education/heart-foundation/Unit3";
import DiplomaInChristianEducationUnit4 from "@/components/courses/diploma-in-christian-education/heart-foundation/Unit4";
import DiplomaInChristianEducationUnit5 from "@/components/courses/diploma-in-christian-education/heart-foundation/Unit5";
import Home from "@/components/icons/Home";
import Courses from "@/components/icons/Courses";
import Events from "@/components/icons/Events";
import Settings from "@/components/icons/Settings";

export const navdata = [
  {
    imgURL: <Homes />,
    route: "/courses",
    route2: "/courses",
    label: "Courses",
  },
  {
    imgURL: <WifiTetheringIcon />,
    route: "/about",
    route2: "/about",
    label: "About",
  },
  {
    imgURL: <AutoStoriesIcon />,
    route: "#our-mandate",
    route2: "/#our-mandate",
    label: "Our Mandate",
  },
  {
    imgURL: <LocalLibraryIcon />,
    route: "/events",
    route2: "/events",
    label: "Events",
  },
  {
    imgURL: <LocalLibraryIcon />,
    route: "#faq",
    route2: "/#faq",
    label: "FAQ",
  },
];

export const adminNavData = [
  { href: "/admin", label: "Home", component: <Home /> },
  {
    href: "/admin/courses",
    label: "Courses",
    component: <Courses />,
  },
  {
    href: "/admin/events",
    label: "Events",
    component: <Events />,
  },
  {
    href: "/admin/settings/profile",
    href2: "/admin/settings/students" || "/admin/settings/password",
    label: "Settings",
    component: <Settings />,
  },
];

export const userNavData = [
  { href: "/dashboard", label: "Home", component: <Home /> },
  {
    href: "/dashboard/courses",
    href2: "/dashboard/lessons",
    label: "Courses",
    component: <Courses />,
  },
  {
    href: "/dashboard/settings",
    href2: "/dashboard/settings/password",

    label: "Settings",
    component: <Settings />,
  },
];

export const modulesData = [
  {
    id: 1,
    imgURL: "",
    label: "Courses",
  },
  {
    id: 2,
    imgURL: "",
    label: "Courses",
  },
  {
    id: 3,
    imgURL: "",
    label: "Courses",
  },
  {
    id: 4,
    imgURL: "",
    label: "Modules",
  },
  {
    id: 5,
    imgURL: "",
    label: "FAQ",
  },
];

export const coursesData = [
  {
    id: 1,
    price_id: "price_1QmDbVJ59YmI2KgE8aJSmrf3",
    title: "Advanced Classroom Assistant",
    imgURL: "/hat.png",
    price: "15.00",
    price2: "45.00",
    snippet:
      "In this course, participants will learn valuable skills and techniques to support teachers in creating a nurturing and educational environment for students.",
    intro: [
      "Are you hearty about helping children thrive academically, emotionally, and spiritually? If so, our Advance Classroom Assistant Course at EDUSOUL DISTINCT might be the programme for you.",
      "In this course, participants will learn valuable skills and techniques to support teachers in creating a nurturing and educational environment for students. From assisting with lesson planning to implementing behaviour management strategies, participants will gain the knowledge and experience needed to excel in a classroom setting.",
      "One of the unique aspects of the course is its Christ-centred curriculum and principles, integrated into every aspect of work as a classroom assistant. Participants will learn how to incorporate faith-based teachings into interactions with students, helping them grow not only academically but also holistically.",
      "The curriculum covers a wide range of topics, including the opportunity to observe and participate in real classroom settings, putting learning into practice in a hands-on way. By completing this programme, participants will be equipped to transit to our Diploma in Christian Education course, if so desired.",
      "If you are interested in enrolling in our Advance Classroom Assistant Course, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of Christian educators.",
    ],
    modules: [
      {
        id: 1,
        title: "EDSD MODULE 1.1 - HEART FOUNDATION",
        units: [
          {
            id: 1,
            title: "The Heart and Vision of Christian Educator Part 1",
            note: `<div className='content-container'>
      <section className='lesson-section'>
        <h2 className='title'>Foundation for Christian Education</h2>
        <p className='uppercase text'>
          <strong className='capitalize text-sm'>Mark 9:37, 10:4</strong> -
          Jesus, Children, and the Kingdom of God
        </p>
        <blockquote>
          <p className='mb-1'>
            Our Lord was speaking specifically about how a person enters the
            kingdom of God, and in looking at children, it was not their
            subjective characteristics, but their objective position in society
            which made them models for discipleship. He meant that just as
            children occupied a socially weak position, dependent on others, and
            at the call of others, so also the followers must live as dependent
            in the kingdom. To enter the kingdom of God means to renounce self
            and self-seeking ambition but to take a status of no consequence.
          </p>
          <strong className='text-xs'>- William Strange, 1996, p. 51</strong>
        </blockquote>
      </section>

      <section className='lesson-section'>
        <h2 className='title'>Christian Education</h2>
        <p>
          Christian education means more than the pursuit of a certain course of
          study. It is educating the whole being—the harmonious development of
          the spirit, soul, and body, and the intentional preparation of
          students for the joy of service to humanity and the higher joy of
          service to God.
        </p>
        <p>
          The source of Christian education is brought to view in the words of
          the Holy Scriptures, pointing to the infinite Lord -{" "}
          <strong className='text-xs'>(Col. 2:3) </strong> , and allowing the
          knowledge of the Lord to cover the earth as the water covers the seas{" "}
          <strong className='text-xs'>(Hab. 2:14) </strong>.
        </p>
        <p>
          Out of God&apos;s mouth comes knowledge and understanding{" "}
          <strong className='text-xs'>(Prov. 2:6) </strong>. The mind of man is
          brought into communion with the mind of divinity (God), the finite in
          commune with the infinite one. The concept of such communion is beyond
          natural perspective.
        </p>
      </section>

      <section className='lesson-section'>
        <h2 className='title'>The Creation, The Fall, and Redemption</h2>
        <p>
          Christian education is the highest form of education, where being the
          teacher again is like the original scene of God instructing and giving
          Adam and Eve power for their family and community{" "}
          <strong className='text-xs'>(Gen. 3)</strong>.
        </p>
        <p>
          In order to understand what is comprehended in the work of Christian
          education, we need to consider:
        </p>
        <ul className='list-disc'>
          <li>
            The nature of man and the purpose of God in creating man and woman{" "}
            <strong className='text-xs'>(Gen. 1:26-27)</strong>
          </li>
          <li>
            The change in man&apos;s condition through the coming of the
            knowledge of good and evil{" "}
            <strong className='text-xs'>(Gen. 3:1-9)</strong>
          </li>
          <li>How man lost his power, spiritual vision, and dominion</li>
          <li>
            God&apos;s redemptive plan for fulfilling His glorious purpose in
            the education of the human race{" "}
            <strong className='text-xs'>(Gen. 3:15)</strong>
          </li>
        </ul>
      </section>

      <section className='lesson-section'>
        <h2 className='title'>The Kingdom of God</h2>
        <p>
          The most important agency of Christian education is the family, the
          basic building block of society. God first of all directs injunctions
          to parents in{" "}
          <strong className='text-xs'>Deut. 6:6-7; 11:18-21.</strong> And these
          words, which I command thee this day, shall be in thine heart: and
          thou shalt teach them diligently unto thy children, and shalt talk of
          them when thou sittest in thine house... Paul adds that parents must
          bring up children “in the training and instruction of the Lord”
          <strong className='text-xs'>(Eph.6:4)</strong>.
          <br />
          Today, society has become so complex that few homes and no regular
          church education program can provide adequate general education,
          besides society provides few meaningful full - time roles for youths.
          Indeed, with widespread family breakdown and low church attendance,
          schools are sometimes forced to take on some roles that used to belong
          to the family or church.
        </p>
        <p>
          It is now more apparent that today&apos;s society distinctly Christian
          schools are desirable. Students must thoroughly develop “Christian
          minds” if they are to be ambassadors of Christ in a secular society.
        </p>
        <p>
          We shortchange students&apos; nurture in the Lord if their education
          does not openly proclaim{" "}
          <strong className='text-xs'>John 17:1-2; 14:6</strong>. <br />
          The vision of the Kingdom of God points Christians not only to the
          redemption of God&apos;s people but also to the realization of
          God&apos;s intents and promises for His whole creation. The whole of
          life and reality are to be transformed by God&apos;s grace and the
          power of Christ's resurrection.
        </p>
        <p>
          The fulfillment of the Kingdom of God began with the death and
          resurrection of Jesus Christ. Its final significance will be revealed
          with Christ&apos;s return. <br /> The great gift of God is that,
          despite our shortcomings and sinfulness, the seed of the Kingdom is
          already here. <br />
          Christian teachers and educators may therefore challenge and prepare
          students to be and become citizens of the Kingdom of God. On the one
          hand, Christ has already established the Kingdom. On the other hand,
          it will not find its ultimate fulfillment in this present life.{" "}
          <strong className='text-xs'> Lk 4:18-21; 17:21; Rev 21:22</strong>.
        </p>
      </section>

      <section className='lesson-section'>
        <h2 className='title'>The Great Command of Love</h2>
        <p>
          God&apos;s plan of redemption to restore man&apos;s glory through
          Christ—this becomes the object of true Christian education{" "}
          <strong className='text-xs'>
            John 17:1-2, John 3:16, John 16:13-15
          </strong>
          .
        </p>
        <p>
          It should be clear that love should be the basis of Christian
          education; as love is the basis of Creation and redemption.{" "}
          <strong className='text-xs'>LUKE 10:27</strong>. ref. the love of God
          in the classroom, book on Christ - centred schools in the UK.
        </p>
        <p>
          Christian education is the highest development of human mind and
          spirit which forms one of the aims Christian schools carry for the
          restoration of the image and likeness of God in humanity. <br /> Like
          the first, is the second commandment{" "}
          <strong className='text-xs'> - Matt.28v39.</strong> The law of love
          calls for the devotion of body, soul and spirit to the service and
          love of God and our fellow men.
        </p>
      </section>

      <section className='lesson-section'>
        <h2 className='title'>Goals of Christian Education</h2>
        <p>
          The Christian Education goal is godliness and godlikeness in His
          creation, which is the very heart of Christ charged to His disciples
          in <strong className='text-xs'>Matt. 28:18-19.</strong> The word
          teaches (educating) the mind to deny ungodliness, selfish desire,
          pride, lust of money, and world ambition. Holy scriptures are the
          perfect standard of truth and as such should be given the highest
          place in education.
        </p>
        <p>
          Teachers and Christian educators are tasked with appreciating the
          moral education of children—acquainting them with virtues such as
          honesty, kindness, courage, patience, love, and forgiveness. The
          foundation for virtue is taught by teachers who are committed to
          truth, integrity, justice, and to influencing the next generation into
          the Kingdom of God.
        </p>
        <footer>
          <strong className='text-xs'>- David Carr, 1995, p. 269</strong>
        </footer>
      </section>
    </div>`,
            assignment:
              "How has Christian Education realigned humanity to God’s original intention? Highlight key major impacts of Christian Education on society, focusing on family, morality, judiciary and  governance. 200 words",
          },
          {
            id: 2,
            title: "Calling and Character of a Christian Teacher",
            note: `<div className='content-container'>
      <section className='lesson-section'>
        <p>
          A Christian Worldview takes as its starting point that the Bible is
          God&apos;s authoritative word for life. Holy scripture is God”s
          inspired self disclosure that calls for obedience and response{" "}
          <strong className='text-xs'>( 2 Tim.3v16)</strong> Christian educators
          should emphasise an experience for students to focus learning both the
          unity and diversity of God&apos;s marvellous creation and to see its
          values and relevance to love God and neighbour ( Great Commandment )
          We must uphold Christian values by using their gifts to serve our
          community (School family) and society - at - large. ( Great Community)
        </p>
      </section>
      <section className='lesson-section'>
        <p>
          A Christian Worldview is shaped by God&apos;s revelation in His word;
        </p>
        <ul className='list-disc'>
          <li>His word in creation</li>
          <li>His word in the Holy Scriptures</li>
          <li>His word incarnate, Jesus Christ</li>
        </ul>
        <p>
          God created, upholds, guides, and rules His world. He sustains the law
          of nature. He also provides us with the norms for human culture and
          society. God&apos;s norms for human life include love, faithfulness,
          compassion, righteousness, justice, integrity, responsible stewardship
          and peace.
        </p>
        <p>
          Our students need to be imbued with a sense of God calling them to be
          royal custodians as they play and discover and work in His world. The
          Christ - centred education takes the great mandate seriously values
          the students daily contributions in being steward cultivators of the
          God-given gifts within and around them.
        </p>
        <p>
          Father&apos;s heart concept is expanded to students by allowing the
          students to learn about and apply and value mathematical and physical
          and biological objects and theories and laws. Moreover, they
          experience how God-given norms can promote compassion, integrity, and
          justice in communication, economics, social interaction, the arts,
          government and law, and family living. Such a classroom curriculum
          enables students to exercise the Father&apos;s concept with levels of
          responsibility appropriate to their levels of maturity. The
          Father&apos;s heart fulfilment encourages the students to be
          responsive and become committed to Kingdom service and to act
          accordingly.
        </p>
      </section>
    </div>`,
            assignment:
              "Discuss God&apos;s agentry for transformation and reconciliation in relation to Great Mandate and Great Commission 150 words. What are the major key personal Characteristics of a Christian teacher? Discuss how each can influence students to be responsible and responsive to the Great Commission. 150 words",
          },
        ],
      },
      {
        id: 2,
        title: "EDSD MODULE 1.2 - Aims of Christian Education",
        units: [
          {
            id: 1,
            title: "Aims of Christian Education",
            note: "",
            assignment:
              "How has Christian Education realigned humanity to God’s original intention? Highlight key major impacts of Christian Education on society, focusing on family, morality, judiciary and  governance. 200 words",
          },
          {
            id: 2,
            title: "Christian Worldview",
            note: "",
            assignment:
              "As Christian teacher and school, you owe this nurturing to the students to fulfil the Great Mandate and Great Commission in their generation. Discuss. 200 words",
          },
        ],

        assignment:
          "As Christian teacher and school, you owe this nurturing to the students to fulfil the Great Mandate and Great Commission in their generation. Discuss. 200 words",
      },
      {
        id: 3,
        title: "EDSD MODULE 1.3 - Christ-Centred Curriculum and Standards",
        units: [
          {
            id: 1,
            title: "Christ-Centred Curriculum and Delivery 1",
            note: "",
            assignment:
              "How has Christian Education realigned humanity to God’s original intention? Highlight key major impacts of Christian Education on society, focusing on family, morality, judiciary and  governance. 200 words",
          },
          {
            id: 2,
            title: "Role of Holy Spirit in Teaching and Learning Process 1",
            note: "",
            assignment:
              "As Christian teacher and school, you owe this nurturing to the students to fulfil the Great Mandate and Great Commission in their generation. Discuss. 200 words",
          },
          {
            id: 3,
            title: "Holistic Culture",
            note: "",
            assignment:
              "As Christian teacher and school, you owe this nurturing to the students to fulfil the Great Mandate and Great Commission in their generation. Discuss. 200 words",
          },
        ],
        assignment: "Assignment",
      },
      {
        id: 4,
        title: "EDSD MODULE 1.4 - Acts of Education",
        units: [],
        assignment: "Assignment",
      },
      {
        id: 5,
        title: "EDSD MODULE 1.5",
        units: [],
        assignment: "Assignment and Mini Project",
      },
    ],
  },
  {
    id: 2,
    title: "Diploma in Christian Education",
    imgURL: "/book.png",
    price: "40.00",
    price2: "85.00",
    snippet:
      "Our Diploma in Christian Education provides students with the knowledge and skills needed to effectively teach and lead within a Christian, world-view context.",
    intro: [
      "If you have a passion for teaching and a desire to make a positive impact in the lives of others, then our diploma programme in Christian Education may be the perfect fit for you.",
      "Our Diploma in Christian Education provides students with the knowledge and skills needed to effectively teach and lead within a Christian, world-view context.",
      "One of the key benefits of this diploma programme is the opportunity to deepen your understanding of the Bible and its application in a Christ-centred curriculum (all subjects and topics), showing the centrality of the Godhead.",
      "Additionally, the programme of studies includes: Educational psychology, Curriculum Development, teaching methods and methodologies, practical skills for effective teaching, classroom management, learning styles, and use of teaching aids/resources for effective curriculum delivery. Students also learn how to be proactive in creating engaging and stimulating units that meet the needs of diverse learners.",
      "This diploma programme includes a practicum component, allowing students to gain hands-on experience in a real-world educational setting; a valuable experience which enhances participants' skills and helps facilitate the development of newer practical skills, and confidence as 21st century educators. Moreover, it provides opportunities for mentorship and networking within the Christian education community. This programme will further prepare students to make a meaningful impact in both academic and ministry settings.  To successfully complete this programme, students will be expected to complete given research topics for every module.",
      "If you are interested in enrolling in our Diploma Programme in Christian Education, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of Christian educators.",
    ],
    modules: [
      {
        id: 1,

        title: "EDSD MODULE 2.1 - HEART FOUNDATION",
        units: [
          {
            id: 1,
            title: "The Heart and Vision of Christian Educator Part 1",
            note: `<div className="content-container">
      <section className="lesson-section">
        <h2 className="title">Foundation for Christian Education</h2>
        <p className="uppercase text">
          <strong className="capitalize text-sm">Mark 9:37, 10:4</strong> -
          Jesus, Children, and the Kingdom of God
        </p>
        <blockquote>
          <p className="mb-1">
            Our Lord was speaking specifically about how a person enters the
            kingdom of God, and in looking at children, it was not their
            subjective characteristics, but their objective position in society
            which made them models for discipleship. He meant that just as
            children occupied a socially weak position, dependent on others, and
            at the call of others, so also the followers must live as dependent
            in the kingdom. To enter the kingdom of God means to renounce self
            and self-seeking ambition but to take a status of no consequence.
          </p>
          <strong className="text-xs">- William Strange, 1996, p. 51</strong>
        </blockquote>
      </section>

      <section className="lesson-section">
        <h2 className="title">Christian Education</h2>
        <p>
          Christian education means more than the pursuit of a certain course of
          study. It is educating the whole being—the harmonious development of
          the spirit, soul, and body, and the intentional preparation of
          students for the joy of service to humanity and the higher joy of
          service to God.
        </p>
        <p>
          The source of Christian education is brought to view in the words of
          the Holy Scriptures, pointing to the infinite Lord -
          <strong className="text-xs">(Col. 2:3)</strong>, and allowing the
          knowledge of the Lord to cover the earth as the water covers the seas
          <strong className="text-xs">(Hab. 2:14)</strong>.
        </p>
        <p>
          Out of God&apos;s mouth comes knowledge and understanding
          <strong className="text-xs">(Prov. 2:6)</strong>. The mind of man is
          brought into communion with the mind of divinity (God), the finite in
          commune with the infinite one. The concept of such communion is beyond
          natural perspective.
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">The Creation, The Fall, and Redemption</h2>
        <p>
          Christian education is the highest form of education, where being the
          teacher again is like the original scene of God instructing and giving
          Adam and Eve power for their family and community
          <strong className="text-xs">(Gen. 3)</strong>.
        </p>
        <p>In order to understand what is comprehended in the work of Christian education, we need to consider:</p>
        <ul className="list-disc">
          <li>
            The nature of man and the purpose of God in creating man and woman
            <strong className="text-xs">(Gen. 1:26-27)</strong>
          </li>
          <li>
            The change in man&apos;s condition through the coming of the
            knowledge of good and evil
            <strong className="text-xs">(Gen. 3:1-9)</strong>
          </li>
          <li>How man lost his power, spiritual vision, and dominion</li>
          <li>
            God&apos;s redemptive plan for fulfilling His glorious purpose in
            the education of the human race
            <strong className="text-xs">(Gen. 3:15)</strong>
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2 className="title">The Kingdom of God</h2>
        <p>
          The most important agency of Christian education is the family, the
          basic building block of society. God first of all directs injunctions
          to parents in
          <strong className="text-xs">Deut. 6:6-7; 11:18-21</strong>. And these
          words, which I command thee this day, shall be in thine heart: and
          thou shalt teach them diligently unto thy children, and shalt talk of
          them when thou sittest in thine house... Paul adds that parents must
          bring up children “in the training and instruction of the Lord”
          <strong className="text-xs">(Eph.6:4)</strong>.
        </p>
        <p>
          Today, society has become so complex that few homes and no regular
          church education program can provide adequate general education.
          Besides, society provides few meaningful full-time roles for youths.
          Indeed, with widespread family breakdown and low church attendance,
          schools are sometimes forced to take on some roles that used to belong
          to the family or church.
        </p>
        <p>
          It is now more apparent that today&apos;s society distinctly Christian
          schools are desirable. Students must thoroughly develop “Christian
          minds” if they are to be ambassadors of Christ in a secular society.
        </p>
        <p>
          The vision of the Kingdom of God points Christians not only to the
          redemption of God&apos;s people but also to the realization of
          God&apos;s intents and promises for His whole creation. The whole of
          life and reality are to be transformed by God&apos;s grace and the
          power of Christ&apos;s resurrection.
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">The Great Command of Love</h2>
        <p>
          God&apos;s plan of redemption to restore man&apos;s glory through
          Christ—this becomes the object of true Christian education
          <strong className="text-xs">John 17:1-2, John 3:16, John 16:13-15</strong>.
        </p>
        <p>
          It should be clear that love should be the basis of Christian
          education; as love is the basis of Creation and redemption
          <strong className="text-xs">LUKE 10:27</strong>. Ref. the love of God
          in the classroom, book on Christ-centered schools in the UK.
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">Goals of Christian Education</h2>
        <p>
          The Christian Education goal is godliness and godlikeness in His
          creation, which is the very heart of Christ charged to His disciples
          in <strong className="text-xs">Matt. 28:18-19</strong>. The word
          teaches (educating) the mind to deny ungodliness, selfish desire,
          pride, lust of money, and worldly ambition.
        </p>
        <footer>
          <strong className="text-xs">- David Carr, 1995, p. 269</strong>
        </footer>
      </section>
    </div>`,
            assignment: "Assignment",
          },

          {
            id: 2,
            title: "THE ESTEEM OF CHRISTIAN EDUCATION",
            note: `<div className="content-container">
      <section className="lesson-section">
        <h2 className="title">THE ESTEEM OF CHRISTIAN EDUCATION</h2>

        <blockquote>
          <p className="mb-1">
            Christian educators should seek every interaction within the classroom and school time to help students become
            Kingdom citizen;
          </p>
        </blockquote>

        <ul className="list-disc gap-1 flex flex-col">
          <li>And How?</li>
          <li>
            A call for repentance, conversion and obedience. Their personal submission to Jesus Christ as saviour and
            Lord of creation is a prerequisite for being co - heir with Christ.
          </li>
          <li>
            A wholehearted commitment which should affect the students&apos; way of life, including their academic
            endeavours. It is only those who devote their lives fully to Jesus as Lord, however, will personally grasp the
            fullness and joy of the responsive discipleship that the school curriculum fosters.
          </li>
          <li>
            God calls us to use our unique talents in service to the whole body and humanity. The School community
            must be a training ground for such communal action for the students.
          </li>
          <li>
            The implication as such will help students be “fellow citizen with God’s people and members of God’s
            household..being built together to become a dwelling in which God lives by His Spirit”. 
            <strong className="text-xs"> Eph.2:19-22 </strong>
          </li>
        </ul>
      </section>

      <p>
        There is a mandate “Go make disciples of all nations..teaching them to obey everything I have commanded you”
        Matt.28:18-20. It makes it compulsory for Christian teachers to study and understand Christ’s teachings so that they
        can apply their hearts unto wisdom in the School curriculum.
        The mandate should be an integral part of school, where students should be encouraged to take up their calling now.
        The classroom should be a laboratory for practicing the central love command. Here students learn what it means to
        live a life of surrender to Jesus and of love to others.
        The educational programme must provide constant opportunities for a responsive learning where faith is put into
        practice. Here the students should live the fruit of love, service and truth. The discipline of gracious discipleship will
        “produce a harvest of righteousness and peace for those who have been trained by it. 
        <strong className="text-xs"> (Heb.12:11) </strong>.
        This implication on the immediate society is having a Christian School that is a signpost of God’s kingdom to the
        world <strong className="text-xs"> (Matt.5:16 </strong> …salt and light of the world) by its very existence in a secular society and by actively promoting a
        vision of God’s coming Kingdom through teaching strategies and programmes, the school is a witness to the fact that
        God is Sovereign and that Christ is redeemer and Lord.
        God will work in Christian teachers “to will and to work according to His good purpose” so that they may “shine like
        stars as they hold out the word of Life”.
      </p>

      <section className="lesson-section">
        <ul className="flex flex-col gap-1 list-disc">
          <li>Christian education has awaken a desire to read and search for God’s ideal:</li>
          <li>An Education that is as high as heaven and as broad as the universe</li>
          <li>An Education experience that is on ending, but that will continue in the life to come</li>
        </ul>

        <p>
          An education that secures to the successful students his passport from preparatory school of earth to the higher glory
          above. <strong className="text-xs">( Education learning from the Master Teacher E.G. White)</strong>
        </p>

        <strong className="text-xs">ASSESSMENT</strong>
        <p>
          Christians usually think of the great mandate and commission in terms of witnessing personally to those who do not
          believe in Christ. That is an important aspect of the great commission. But read <strong className="text-xs">Matt.28:18-20</strong> again with fresh eyes.
          Why does Christ enjoin us to make disciples <strong className="text-xs">(not just converts)</strong> of all nations? <br /> What does it mean “to teach them to obey everything I have commanded you”?
        </p>

        <strong className="text-xs">
          References: <br /> Walk with God in the Classroom - Harro Van Brummelen <br />
          Master Teacher - E.G.White <br />
          C. Fred Dickson, - The Holy Spirit in Education
        </strong>
      </section>
    </div>`,
            assignment: "Assignment",
          },

          {
            id: 3,
            title: "CALLING OF A CHRISTIAN TEACHER",
            note: `<div className="content-container">
      <section className="lesson-section">
        <h2 className="title">3 CHRISTIAN V SECULAR WORLDVIEW</h2>

        <blockquote>
          <p className="mb-1">
            A Christian Worldview takes as its starting point that the Bible is God&apos;s authoritative word for life. Holy
            scripture is God&apos;s inspired self-disclosure that calls for obedience and response{" "}
            <strong className="text-xs">( 2 Tim.3v16)</strong>. Christian educators should emphasise an experience for students to focus
            learning both the unity and diversity of God&apos;s marvellous creation and to see its values and relevance to
            love God and neighbour <strong className="text-xs">( Great Commandment )</strong>. We must uphold Christian values of
            using their gifts to serve our community{" "}
            <strong className="text-xs">- William Strange, 1996, p. 51</strong> and society-at-large.{" "}
            <strong className="text-xs">(Great Community)</strong> <br />
            A Christian Worldview is shaped by God&apos;s revelation in His word;
          </p>
        </blockquote>
      </section>

      <section className="lesson-section">
        <ul className="list-disc">
          <li>His word in creation,</li>
          <li>His word in the Holy Scriptures,</li>
          <li>His word incarnate, Jesus Christ.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <p>
          God created, upholds, guides, and rules His world. He sustains the law of nature. He also provides us with the
          norms for human culture and society. God&apos;s norms for human life include love, faithfulness, compassion,
          righteousness, justice, integrity, responsible stewardship, and peace. Our students need to be imbued with a
          sense of God calling them to be royal custodians as they play and discover and work in His world. The
          Christ-centred education takes the Great Mandate seriously and values the students&apos; daily contributions in
          being steward cultivators of the God-given gifts within and around them. Father&apos;s heart concept is expanded
          to students by allowing the students to learn about and apply and value mathematical and physical and
          biological objects and theories and laws. Moreover, they experience how God-given norms can promote
          compassion, integrity, and justice in communication, economics, social interaction, the arts, government and
          law, and family living. Such classroom curriculum enables students to exercise the Father&apos;s concept with
          levels of responsibility appropriate to their levels of maturity. The Father&apos;s heart fulfilment encourages the
          students to be responsive and become committed to Kingdom service and to act accordingly.
        </p>
        <p>
          As Christian teachers and school, you owe this nurturing to the students for them to fulfil the Great Mandate
          and Great Commission in their generation.
        </p>

        <p>SECULAR WORLDVIEW</p>
      </section>
    </div>`,
            assignment: "Assignment",
          },

          {
            id: 4,
            title: "CHRISTIAN V SECULAR WORLDVIEW",
            note: `<div className="content-container">
      <section className="lesson-section">
        <h2 className="title">CALLING OF A CHRISTIAN TEACHER</h2>
        <p className="uppercase text">
          The mission statement sets the basis and focus that recognises your calling or School with the purpose of preparing students for good works 
          <strong className="text-xs">( Eph.4:12)</strong> and meet for the master’s use. 1 Tim.2v19
        </p>
        As Christian educators, you work at this calling with all your heart, as working for the Lord, not just for the school board or even for the students. 
        <strong className="text-xs">Col.3v23</strong>
        <br />
        You are chosen to be a royal, holy priesthood… <strong className="text-xs">1 Peter 2v9</strong>. <br />
        You will deepen your pedagogical insight by study of scriptures, reading and discussing Christian educational issues with like-minded servant leaders.
      </section>

      <section className="lesson-section">
        <ul className="list-disc">
          <li>Apostle Peter made it clear that God calls Christian educators, like all believers, to be priests.</li>
          <li>As a priest, you accept students for who they are.</li>
          <li>Prayerfully help broken relationships in their families.</li>
          <li>You intercede for their destiny in Christ compassionately</li>
          <li>
            You are a priest in the sense of encouraging and supporting the students to develop their various God-given gifts.
          </li>
          <li>
            As priest, you are ambassadors of Christ, and share His reconciling love <strong className="text-xs">( Steensma 1971)</strong>
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <p>
          2. A royal priesthood, Sovereigns in Scripture, were to rule wisely in justice, fairness and righteousness 
          <strong className="text-xs">( Pr.29v14and Isa.9v7)</strong>
        </p>
        <ul className="list-disc">
          <li>You administer or manage affairs so that they served students unselfishly and graciously</li>
          <li>
            You are to “testify to the truth” <strong className="text-xs">( John 18v37)</strong>. In the classroom you are the priest and the prophet, help students to lovingly, justly and righteously perform their task with assurance.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <p>
          3. Another important Royal task of Christian educators is to plan and deliver a curriculum that “testifies to the truth” and “declares the praise of God”
        </p>
        <ul className="list-disc">
          <li>Reflecting God’s world and the students&apos; place in it</li>
          <li>Helping student to understand fulfilling the Father’s heart concept and skills to real situation</li>
          <li>
            Your interpretation must be balanced and clear by relying on the Holy Spirit so it contributes to students&apos; understanding and personhood.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <p>
          4. Peter said that our priesthood is a holy one <strong className="text-xs">( 1 Peter 2v5)</strong>
        </p>
        <ul className="list-disc">
          <li>You are a distinct person separated from the evil course and lust of the world</li>
          <li>You model biblical piety</li>
          <li>
            You relate with the student by example in a Christ-like attitude of love, and expect the student to respond.
          </li>
          <li>
            In these ways, the seed of holy living is sown, asking the Holy Spirit to give the increase and lead the students to holy life.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>AS A GUIDE</h2>
        <br />
        <strong className="text-xs">
          God calls Christian educators to guide young hearts into the knowledge and discernment that leads to reconciliation and serves God and humanity
        </strong>
        <ul className="list-disc">
          <li>
            It is in Christ, Apostle Paul says, that all the treasures of wisdom and knowledge are hidden. He adds that
            we must shun hollow and deceptive philosophies based on human tradition. 
            <strong className="text-xs">Col.2:3-8.</strong> Instead, “Let the word of Christ dwell richly in you as you teach and admonish” 
            <strong className="text-xs">Col.3:16.</strong> That is the basis of our guidance as Christ-centred educators
          </li>
          <li>You are stewards of God’s gifts within you and of those students God entrusts to you.</li>
          <li>
            It is required of you to have a diverse competence as well as a sense of direction and purpose that enables you to be an effective guide.
          </li>
          <li>
            You are a shepherd, just as Christ is our great Shepherd <strong className="text-xs">(Heb.13v20).</strong> A shepherd guides his sheep in the
            right direction away from deception, and cares for his sheep. In us just as the Spirit of Truth guides us into all truth. 
            <strong className="text-xs">(John 16v13)</strong>
          </li>
          <li>
            Christian educators are to guide students in the way of wisdom <strong className="text-xs">(pro.4v11)</strong>. The stability of thy times and the
            strength of thy happiness shall be wisdom and knowledge. Isa.33v6 - that wisdom and knowledge which
            comes alone can impart. “this is your wisdom and understanding in the sight of all nations that you are a
            great people” <strong className="text-xs">Deu.4v6.</strong>
          </li>
          <li>
            Here is the only safeguard for individual integrity, for the purity of the family, the well-being of society, or the stability of the nation.
          </li>
          <li>
            You are shepherds: <strong className="text-xs">Pathfinders, mentors, role model, coaches, counsellor</strong>. You guide students to
            discover and develop their gifts and take on life&apos;s calling in an ever deeper and fuller way.
          </li>
          <li>You guide students into becoming competent, discerning, responsive disciples</li>
          <li>
            Your guidance requires the ability to unfold content (use of various strategies during lesson) and promote an environment and atmosphere that enables students to discover their life calling (using their execution function skills, exercising abilities and developing dispositions on the basis of Scriptural norms and principles).
          </li>
          <li>
            To guide the students into the path of Christ-centred curriculum must be a classroom and ethos permeated with righteousness, justice, love, diligence, compassion and respect
          </li>
          <li>
            Without this, teaching reaches the minds but not the hearts of students. Then it is relatively ineffective in guiding students to become persons who understand and do the will of God in their daily lives.
          </li>
        </ul>
      </section>

      <p>
        An obstacle that we as Christian teacher-guides must overcome is the pervasive influence of our secular society on ourselves and on the students. God calls us to help and guide students develop the insights, ability and dispositions necessary to serve God in all aspects of their sphere of influence.
        <br />
        The Lord warns of the grave risk of leading children astray <strong className="text-xs">(Matt.18v2-6).</strong>
        <br />
        Teaching is a responsible and rewarding profession, but as the Apostle points out, also a potentially dangerous one 
        <strong className="text-xs">( James 3v1).</strong>
        <br />
        Christian educators and teachers must guide in the truth. You must let the truth dwell in your heart richly for your source verse and how to go about applying it.
      </p>
    </div>`,
            assignment: "Assignment",
          },
          {
            id: 5,
            title: "LABOURER OF GOD’S HARVEST IN CHRISTIAN EDUCATION",
            note: `<div className="content-container">
      <section className="lesson-section">
        <h2 className="title">LABOURER OF GOD&apos;S HARVEST IN CHRISTIAN EDUCATION</h2>
        <p className="uppercase text">
          <strong className="capitalize text-sm">1 COR.3:6-9, John 5:29</strong>
        </p>
        <blockquote>
          Let us mark the emphasis of according to your gift and position you are occupying as God&apos;s agentry
          for transformation and reconciliation (Great mandate and Great commission) <br />
          Position - We are co-labourers with God, with the gifts to restore the heart of the students with God.
        </blockquote>

        <blockquote>
          <p className="mb-1">
            Labourer with God verse 9 meaning a diligent, focused, determined, and devoted firmness to bring
            forth fruits to please God. Look at the example of Jacob, David and Paul. You are God&apos;s husbandry to bring forth fruits <strong className="text-xs">- John 15:1-7.</strong>
          </p>
        </blockquote>
      </section>

      <ul className="list-disc">
        <li>
          It is God&apos;s desire to achieve great results, and this is made possible by a teachable spirit and heart. Faith comes by hearing and hearing by the word of God <strong className="text-xs">(Hebrew 10:11)</strong>
        </li>
        <li>
          Wise builder - build with grace and wisdom to implant, mould, and nurture hearts until the intent of God is formed
        </li>
        <li>God&apos;s gift and calling comes with grace, meaning enablement and favour</li>
        <li>
          We are His workmanship ordained unto great good works. <strong className="text-xs"> Eph.2:10</strong>
        </li>
        <li>
          The grace to build wisely is given already and is laid upon the foundation, which is Christ. <strong className="text-xs"> 1 Cor.3:4</strong>
        </li>
        <li>
          Take heed how you build as a labourer - tenets of faith, Christian ethos, Christ-centred curriculum that underpin the vision which is the bedrock.
        </li>
        <li>
          What to build with - except the Lord build the house they labour in vain. <strong className="text-xs"> Psl.127:1-2</strong>
        </li>
        <li>Quality outcome is determined by the quality of light in you</li>
        <li>
          Building with precious stones <strong className="text-xs">- Eph.2:20</strong>..the foundation and culture of our building is with the teachings of the Lord and Apostles.
        </li>
        <li>Gold, Silver and Precious stones</li>
        <li>Wood, hay and stubble (Worldly knowledge or wisdom of this world)</li>
      </ul>

      <p>
        The test by fire (life perplexities, dangers, and conflicting claims) of all you have built - either they are burnt or come
        out as gold, silver, and precious stones.
      </p>
      <section className="lesson-section">
        <h2 className="title">Personal characteristics as a Christ-Centred educator</h2>

        <ul className="list-disc">
          <li>
            You cannot guide students in the truth in an authentic and effective way unless you possess definitive
            personal characteristics through the lens of the fruit of the Spirit <strong className="text-xs">(Gal.5v22-23)</strong>
          </li>
          <li>
            Be committed personally to Jesus Christ. Being a new creature in Christ changes our perspective and
            purpose.
          </li>
          <li>
            You are saved so that you are consecrated to serve God and our students in and through teaching.
          </li>
          <li>
            Your personal commitment to Christ is the basis for teaching Christ-Centred curriculum.
          </li>
          <li>
            Your personal commitment to Christ leads you to being Spirit-filled, which will reflect in you, the fruit of the spirit <strong className="text-xs">(Gal.5:22-23, John 14:16-17)</strong>. The Spirit empowers you to teach with wisdom and responsibility. As Christian teachers and school, you owe this nurturing to the students for them to fulfil the Great Mandate and Great Commission in their generation.
          </li>
        </ul>

        <p>
          <strong className="text-xs">
            Note that love and patience are key in nurturing students. Research shows that students tend to adopt the beliefs and values of a community where there is love and acceptance (Wolterstorff 1980, p.60)
          </strong>
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">ASSIGNMENT</h2>
        <ol>
          <li>
            Make a list of personal characteristics that enable a teacher to “walk with God in the classroom” which is essential and desirable? What are the likely curriculum outcomes?
          </li>
          <li>
            Enumerate the term “Co-labourer with God” as it applies to a Christian teacher and what are the eternal impacts on students and the community in fulfilling the Great Commission and Great Mandate?
          </li>
        </ol>
      </section>
    </div>`,
            assignment: "Assignment",
          },
        ],
      },
      {
        id: 2,
        title: "EDSD MODULE 2.2 - Aim of Christian Education",
        units: [
          {
            id: 1,
            title: "Understanding the aim of Chrisian Education",
            note: ` <div className="content-container">
      <section className="lesson-section">
        <h2 className="title">AIMS OF CHRISTIAN EDUCATION</h2>
        <p className="uppercase text">
          <strong className="capitalize text-sm">Understanding the aim of Christian Education</strong> 
          Jesus, Children, and the Kingdom of GodYou must understand that the aim of Christian education orientation comes from a
          curriculum that finds its basis first of all in four biblical injunctions:
        </p>

        <ul className="list-disc">
          <li>
            God gave us His creation mandate to care for and be stewards of the world and to keep it holy. <strong className="text-xs">(Gen.1v28. 2v15. Psl.8)</strong> however, when the knowledge of good and evil came through human disobedience by not following God&apos;s intended love and just. God then gave us the great commission to love him above all and neighbour.
          </li>
          <li>
            Christ came to fulfil God&apos;s law by His death for everyone and to enable personal and communal discipleship based on Christ righteousness and justice to fulfil God&apos;s calling. <strong className="text-xs">(Great Commission Matt.28v19)</strong>
          </li>
          <li>Christian Schools and educators should emphasise an experience for students to focus learning both the unity and diversity of God&apos;s marvellous creation and to see its values and relevance to love God and neighbour (Great Commandment)</li>
          <li>
            Christian Schooling must uphold its values of using our gifts to serve our community and
            society-at-large. (Great Community)
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2 className="title">Christian Education As Bearers of Hope</h2>
        <p>
          The French Christian philosopher Jacques Ellul generally presents a bleak picture of the current state of our culture. Technology has become our new god, he says. The impact of Christianity has been reduced to the salvation of individual souls. Our technical-industrial culture has suppressed both meaning and the role of the individual as subject. He adds, there is hope. Christian can become iconoclasts who destroy the religious image of technology and see technology for what it is, as nothing but objects that can be useful. The aims of Christian education become the bearers of freedom and hope in society since they reject the deterministic conditioning of technology and rest in the affirming love of God. In Him and in Him alone the future is possible and positive <strong className="text-xs">(Ellul 1981, 108-110)</strong>. Justice and love and shalom will not totally prevail until Christ returns. Meanwhile, God calls Christian Schools to guide and help students become committed to values that, like points of light, penetrate our cultural darkness.
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">The Creation, The Fall, and VALUES EDUCATION:</h2>
        <ol>
          <li>VALUES EDUCATION:</li>
          <p>
            Teachers can be bearers of hope when they thoughtfully and prayerfully plan to foster
            commitment to values within the classroom community. The School must also ensure that its
            Christ-centred curriculum at each level fosters biblical values such as respect, integrity,
            faithfulness, forgiveness and restoration. The ethos of a school and the classroom sets the
            stage for the implicit curriculum.<br />
            In a 1891 speech republished in 1991, the Dutch theologian and statesman Abraham Kuyper
            called for Christian action based on repentance and renewal on God&apos;s ordinances of love,
            mercy, justice and compassion.<br />
            Kuyper said that Jesus never preached revolution. Instead, He "lace the truth over against
            error and broke the power of sin by shedding his blood and pouring His spirit His own
            followers" by this way, He reconciled both rich and poor to God. Jesus instructed His
            followers to scorn the lust for money that leads to greed and oppression of the poor.<br />
            Kuyper, argued, Christianity should be a God-willed community that transforms society.
            He went on to found a Christian university and serve as prime minister of the Netherlands. He
            introduced some of the most progressive labour legislation of his time, basing it on biblical
            values. His worldview also influenced the Dutch Christian school movement. The schools
            nurtured a humble attitude to life by which students would find their worth in Christ and be
            empowered to find and respond with forgiveness, mercy and joy.<br />
            The curricula emphasised that a Christian life is a total life-style promoting love and
            compassion for family members and others in the society.<br />
            The adult life of the students is to use God&apos;s creation and technology aligned with the truth,
            justice and wholesome biblical values throughout society.<br />
            Values are desirable ends, things for which we ought to strive. The aim of true Christian
            education sets the direction for our lives.
          </p>
          <p>
            Values are not to be pursued just for your own betterment or self-interest, rather, you seek
            and follow the values that God, as creation&apos;s lawgiver has established. Without them, His
            creation and creatures cannot function in the way he intended. Kuyper&apos;s significance was
            that his Christian worldview and its values shared a generation of Dutch society. This
            generation sensed the need for applying personal faith in family life, politics, the justice
            system, business, commerce, the media and music industry
          </p>

          <li>SPIRITUAL VALUES</li>
          <p>
            I will indicate some key biblically based values that, I believe ought to govern life and therefore also permeate life in the classroom, and contrast those with values often held in the society.
          </p>
          <ul>
            <li>
              The heart of Christian education ought to seek shalom, the biblical peace and justice that heals and restores broken relations with God, with other humans, self and with nature.
            </li>
            <li>
              Shalom gives joy to life since it points to the redemptive power of Christ that restores our
              relationship with the Father
            </li>
            <li>
              To experience Shalom, schools must seek to replace oppression, abuse, racism and
              sexism, with love and justice.
            </li>
            <li>
              Teachers and students exert their roles in gratitude and obedience and see all tasks, no
              matter how humble, as God&apos;s vocation for them
            </li>
            <li>Honouring community</li>
            <li>
              They replace selfishness and faith in the autonomy of the individual with self-sacrifice, humility and servant-leader. While schools foster the love and justice underlying shalom, nevertheless, students should be guided to explore and develop their values and implications. Teachers trying to impose values unilaterally on students is counterproductive and leads to hypocrisy, at the same time students should not undermine the ethos and classroom values and standards.
            </li>
          </ul>
        </ol>
      </section>
    </div>`,
            assignment: "Assignment and Research Project",
          },
          {
            id: 2,
            title: "THE OVERALL AIM OF CHRISTIAN EDUCATION",
            note: ` <div className="content-container">
      <section className="lesson-section">
        <h2 className="title">THE OVERALL AIM OF CHRISTIAN EDUCATION
        </h2>
        <p className="uppercase text">
          The overall aim of Christian education or Schooling is to guide and help students understand and exercise personal and communal responsive discipleship based on the four biblical injunctions.<br />
          <strong className="text-xs">To do so:</strong> -
        </p>

        <blockquote>
          <p className="mb-1">
            <ol>
              <li>
                The role of the Christian teacher is more than that of a facilitator (see the module 1 unit 1 on heart and
                vision of Christian educator). You are religious craftsperson who use and develop your teaching skills
                reflectively within a well-defined philosophical/religious framework. This framework enables you to guide and
                nurture your students. Where such guidance takes place through unfolding curriculum content that advance
                Christian worldview. It also occurs through which students experience the four biblical injunctions. You help
                students to attain a knowledge and skill background that enable them to take on life&apos;s tasks capably and
                responsibly. In all schools, teachers model that submission to the Lord is the beginning of wisdom
              </li>
              <li>
                Learning strategies are based on students being unique images of God called and equipped to serve each
                other in the Great Community. The rhythm of researching, learning styles, preparing, presenting, practicing,
                evaluating and responding in learning allows all students to discover, develop and exercise their gifts to the
                fullest. In a mixture of individual, whole group, and small group learning helps students see the need to
                develop their gifts in order to obey the Great Mandate
              </li>
              <li>
                Content of the Christ-Centred curriculum is based on students&apos; experience of God&apos;s creation. You choose
                content related to students&apos; appropriate age learning experience and explore it in the light of the source
                verse. You help the students to analyse, develop and respond to the lesson concept in a more formal and
                abstract way at a level appropriate to their ability and age. The curriculum content must help students to
                develop skills necessary for functioning effectively, including the ability to weigh various viewpoints and
                interpretations. It must develop students&apos; attitudes, values, moral dispositions and commitments based on a
                careful consideration of the worldview affecting culture. In this aim, the content encourages students to
                consider and adopt a Christian vision of life that affects their decisions about personal and social
                phenomena and issues. (Trinity Module)
              </li>
              <li>
                Evaluation or assessment procedures should promote students and teachers&apos; growth. As such there is a
                wide range involving formative assessment by the school, teacher, self and peer-evaluation and reflection
                on the degree to which students and teachers attain pre-set personal teaching and learning goals. We
                evaluate and reward students in terms of the School&apos;s goals and standards, not just for students&apos; academic
                progress, but weighed more on their personal spiritual, moral, aesthetic, social, emotional, physical and
                industry.
              </li>
              <li>
                Curriculum planning process is based on clear intents and goals relating to a Christian worldview without
                compromise: "How are going to present this topic in faithfulness to the Scripture?" "How Christ-Centred are
                we".
              </li>
              <li>
                The curriculum leaders and implementers must continually ask the Holy Spirit about the effects of curriculum
                plans, teaching and learning on the community. Consequently, any curriculum plan is implemented flexibly
                with the whole school community carried along.
              </li>
            </ol>

            <p>
              The ultimate end is to enable students acquire the discernment and ability necessary for standing in the world as
              reformers, restorers and builders of the true paths to dwell <strong className="text-xs">(Isa.58v12).</strong>
            </p>
          </p>
        </blockquote>

        <p>
          Our graduates should be able to offer a fundamental critique of secularism and institutions. It leads them to active
          godly service in the seven (Politics, Government, Religion, Commerce, Family, Education, Music and Media) sphere
          of influence in the society and the whole serving their communities without compromising their commitment to Christ
          teachings and biblical values.They develop their abilities and insight in order to become vibrant, dedicated servant
          leaders. They learn and experience the rightful place of science, technology, communication, aesthetics, justice, truth
          and love. In all schools, teachers model that submission to the Lord is the beginning of wisdom. 
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">ASSESSMENT</h2>
        <ul className="list-disc">
          <li>
            The nature of man and the purpose of God in creating man and woman{" "}
            <strong className="text-xs">(Gen. 1:26-27)</strong>
          </li>
          <li>
            Discuss the ultimate aim of Christian Education and its effectiveness both in the
            students, community and wider society. illustrate your conviction based on your
            research
          </li>
          <li>What is the Trinity Module? Dis how the Module can effectively enable students and the
            community to experience God&apos;s original intention for humanity</li>
          <li>
            Discuss the views of Kuyper the Dutch theologian on the impact of biblical values in
            education and it&apos;s transformation effect on individual students and society at large.
          </li>
          <li>
            How can you unfold your curriculum content based on the four biblical injunctions to
            achieve the overall aim of Christian education in the 21st Century?
          </li>
        </ul>

        <p>
          <strong className="text-xs">
            Ref.reading <br /> 
            Harro Van Brummelen - Walking with God in the Classroom <br />
            Harro Van Brummelen - Steppingstones to curriculum  <br />
            Michael - Christian education</strong>.
        </p>
      </section>
    </div>`,
            assignment: "Assignment and Research Project",
          },
        ],
      },
      {
        id: 3,
        title:
          "EDSD MODULE 2.3 - Christ-Centred Curriculum and Effective Standards",
        units: [
          {
            id: 1,
            title: "Christ-Centred Curriculum and Delivery 1 & 2",
            note: `<div className="content-container">
      <section className="lesson-section">
        <h2 className="title">CHRIST-CENTRED CURRICULUM DELIVERY</h2>
        <p>
          The Education that hinged on Christ-Centred Curriculum.
        </p>
        
        <p>
          <strong className="text-xs">What is a Christ-centred curriculum? - Biblical principles - The Father&apos;s heart concept
          is at the centre of all subjects&apos; topics - Col.2:3, John 5:39… Revealing Christ.</strong>
        </p>

        <p>
          The heart of true education is to reveal the heart of God&apos;s original intention and ultimate use of
          knowledge to God&apos;s glory on earth.<strong className="text-xs">(Great Mandate. Gen.2:15)</strong>
        </p>

        <h3>WHO & HOW (See Holy Spirit in Teaching and Learning Process)</h3>
        
        <p>
          Christian Curriculum has its foundation in the Word of God as our Rock, <strong className="text-xs">(Matt.7:24-27)</strong> when
          applied by the illumination and help of the Holy Spirit (teachers must be believers in Christ as
          their redeemer, walking with the Holy Spirit, and prayerful).
        </p>

        <p>
          WHO?
          This is what nurtures and enriches life with the truth in the students. - verse 28..
          Delivery of the curriculum is by a transformational teacher, who is a servant-leader and not a
          general norm of curriculum delivery of master class.
          Christ-Centred teachers must commit to knowledge and understanding of Christ&apos;s teachings so
          that they can apply them to fulfil the Father&apos;s Heart concept.
          You need to develop the application and implications for various areas of life with their students
          by being creative with the curriculum delivery and community.
          The classroom must be the laboratory for practicing the central love command and using God&apos;s
          gifts in your life.
        </p>

        <p>
          HOW?
          Using the Trinity Model - The Truth The Way and The Life - <strong className="text-xs">John 14v6</strong>
          <ul>
            <li>Source Verse (Truth) - Roots of knowledge (TOPICS) are linked to the word of God.</li>
            <li>Methodology (Way) - Context and progressive strategies (LESSON DELIVERY)</li>
            <li>
              Learning for life (Father&apos;s heart) - God&apos;s initial intention to use knowledge acquired for His
              pleasure and glory - this is our fulfilment.
            </li>
          </ul>
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">CHRIST – CENTRED EDUCATION (CROWN HOPE INTERNATIONAL ACADEMY)
        CASE STUDY: HEAD OF SCHOOL</h2>
        
        <p>
          A Christ-centred education is a framework or program that integrates Christian teachings, values, and
          principles into every aspect of learning. This type of education emphasises that Christ is the foundation of
          all knowledge and seeks to show how faith and learning intersect in all subjects, whether academic or
          extracurricular. <strong className="text-xs">(2 Tim.3:14-16)</strong>
        </p>

        <p>
          My experience with our Christ-Centred educational curriculum in Crown Hope School has been a life changing
          one as it continues to enable me draw closer to my Heavenly Father and as well as guide learners/students
          develop a Christian worldview (i.e. students begin to understand and interpret History, Science, Math, and
          all other subjects in the light of their Christian faith).
        </p>

        <h3>WHAT IS CHRIST-CENTRED EDUCATION IN CROWN HOPE SCHOOLS?</h3>
        <p>
          Christ-centred education in Crown Hope School is not just a curriculum, it is a DISCIPLESHIP OF A
          LIFESTYLE. Christ is seen and felt at the centre of the entire school community and atmosphere. From
          the classroom, to lesson deliveries, to lunch breaks, assemblies, play time... Christian values are our
          focus and source.
        </p>

        <section className="lesson-section">
          <h2 className="title">ASSESSMENT</h2>
          <p>
            Investigate if there are such pioneering Christ-centred schools in your region and draw
            your conclusion on how they reflect the concept of Christ-Centred education. Using the
            Trinity Module. 150 words.
          </p>

          <p>
            What is the trinity module and demonstrate the functionality to achieve the Father&apos;s heart
            concept? 200 words.
          </p>
        </section>
      </section>
    </div>`,

            assignment:
              "Investigate if there are such pioneering Christ - centred schools in your region and draw your conclusion on how they reflect the concept of Christ - Centred education. Using the Trinity Module. 150 words What is the trinity module and demonstrate the functionality to achieve the Father’s heart concept? 200 words",
          },
          {
            id: 2,
            title:
              "ROLE OF HOLY SPIRIT IN TEACHING AND LEARNING IN WHOLE SCHOOL",
            note: ` <div className='content-container'>
      <section className='lesson-section'>
        <h2 className='title'>
          ROLE OF HOLY SPIRIT IN TEACHING AND LEARNING IN WHOLE SCHOOL
        </h2>

        <p>
          When most people sink their teeth into a soft slice of bread, they seldom take time to reflect
          upon the process of how the bread was made. Even if they can identify the sweet aroma of the
          years, they probably will not stop to appreciate the central role of their years in the bread
          making. So it is with the holy Spirit. Although He is the major catalyst to the educational 
          process of learning and growing towards Christlikeness. The often neglected personnel in the 
          teaching - learning process is actually the most important. If we do not understand and actively 
          seek the Holy Spirit&apos;s co-operation in our teaching, our teaching will fall short of raising up a 
          godly personality who will display the fruits of Christlikeness. The Schools and educators must 
          be intentional and sincere in collaboration with the Holy Spirit in teaching and learning process, 
          hence will fail to accomplish Spiritual results. 
        </p>

        <h3>Who is the Holy Spirit in Christian Education Process?</h3>
        <p>
          In order to understand the significance of the Holy Spirit in the educational process and how He
          works through the various aspects of the learning experience.
        </p>

        <ul className='list-disc'>
          <li>
            We must come to an understanding and acceptance of His distinctive native as the Third person of the Trinity.
          </li>
          <li>He possesses the attributes of God,</li>
          <li>He has a distinctive role and purpose.</li>
        </ul>

        <p>
          Jesus introduces the Holy Spirit as a teacher{" "}
          <strong className='text-xs'>(John 14v26)</strong>..But &quot;the helper, The Holy Spirit,
          whom the Father will send in My name, He will teach you all things and bring to your
          remembrance all that I said to you.&quot; Intimacy with The Holy Spirit draws a person into an intimate
          relationship with Christ. <br />
          He helps us to be Christ - Centred education. He is synonymous with the Spirit of Christ{" "}
          <strong className='text-xs'>(John 15:26)</strong> <br />
          Jesus Christ the master teacher, when He was on the earth, after He ascended, The Holy Spirit
          took over the role as the teacher in the lives of believers.
        </p>

        <h3>Other Dimension of The Holy Spirit in teaching and learning process</h3>
        <p>
          To bear witness to the truth about Jesus and to lead us into all truth{" "}
          <strong className='text-xs'>(John 16:13)</strong> The truth that Christ speaks of is objective, based in 
          himself and the Father. He receives from Christ and testify the objective truth. This stands in stark 
          contrast to the prevailing educational philosophy of this age which defines The Holy Spirit as our 
          inner light that reveals subjective truth within an individual. The scripture reveals that The person 
          of The Holy Spirit represents an objective manifestation of the truth of God that never contradicts 
          biblical truth. While The Holy Spirit often expresses Himself in subject ways within us, His voice can 
          be tested as to its authenticity by comparing it to truth from the word of God. The Holy Spirit&apos;s voice 
          or teaching never contradicts God and Christ&apos;s objective revelation in the scriptures.
        </p>
      </section>
    </div>`,
            assignment: "Assignment and Research Project",
          },
          {
            id: 3,
            title: "HOLY SPIRIT ROLE IN CHRISTIAN EDUCATION",
            note: `<div className="content-container">
      <section className="lesson-section">
        <h2 className="title">HOLY SPIRIT ROLE IN CHRISTIAN EDUCATION</h2>
        
        <p>
          The Holy Spirit desires to play a major role in every aspect of teaching and learning process in
          Christian education. Unfortunately, His influence is limited by the unwillingness of teachers and
          educators to draw on His wisdom, truth, influence, things that are freely given to us and power
          through the curriculum and life of the learning experience.
        </p>

        <p>
          As we engage the depth, length and breadth of His involvement as The master teacher, we will
          be more apt to actively seek His help and revelation, wisdom in every aspect of our curriculum.
          Let us unpack this in five elements of the Christian School:
        </p>

        <ul className="list-disc">
          <li>The teacher</li>
          <li>The learners</li>
          <li>The Word - Father&apos;s Heart</li>
          <li>The participants</li>
          <li>The environment and atmosphere of His presence</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2 className="title">A. THE TEACHER AND THE HOLY SPIRIT</h2>

        <p>
          The first avenue the Holy Spirit works, is the teacher as a regenerated vessel. Jesus says,
          teach others all I have taught you{" "}
          <strong className="text-xs">(Matt.28v19-20)</strong> and Paul told Timothy to pass on his teaching
          to reliable and faithful men and women (responsive and responsible students) <strong className="text-xs">2 Tim.2v2</strong>.
          In one sense, every believer has the responsibility to teach what they have learn, some
          Christian are gifted by the Holy Spirit with special teaching abilities:
        </p>

        <p>
          Spiritual gifts:
          <ul className="list-disc">
            <li>1 Cor.12v7-31</li>
            <li>Roms:12v3-8</li>
            <li>Eps.4:7-12</li>
          </ul>
        </p>

        <p>
          Spiritual gifted teachers seem to have holistic ministry in scripture, teaching the word in a way
          that changes the thinking of individual students and eventually impacts their community
        </p>

        <ol>
          <li>
            Spiritual gifted teachers help the spirit - directed students to understand and apply the word of
            truth within their lives and relationships.
          </li>
          <li>
            Spiritually sensitive teachers to the Holy Spirit know how to orchestrate every aspect of the
            learning experience toward the ultimate spirit&apos;s goal. The gift of teaching is the "art of compelling
            interaction between the various element within the learning and learning environment" <strong className="text-xs">(James Plueddemann)</strong>
          </li>
          <li>
            Christian teachers must walk in the Spirit to be used effectively within the curriculum.
            Fruitfulness in Christian education is connected to the individual teacher&apos;s intimacy with Christ
            through the Holy Spirit <strong className="text-xs">(John 15v1-7)</strong>
          </li>
          <li>
            Christian teachers will be held to the higher standard of godly living <strong className="text-xs">(James 3v1)</strong>
            In order for Christian teachers to be used effectively, they must live in holiness, purity and
            humility <strong className="text-xs">(2 Tim.2:19-22)</strong>
          </li>
        </ol>

        <p>
          Spirit - led teachers will easily yield and cooperate with the Holy Spirit throughout each phase of
          the following:
        </p>

        <p>Planning Christ - centred curriculum - lesson and resources</p>

        <ul className="list-disc">
          <li>Preparation - Scripture application and broader knowledge</li>
          <li>Presentation - Methodology and application of learning styles</li>
          <li>Follow - up: Targets setting and feedbacks on the learning experience</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2 className="title">UNIQUE ACTS OF CHRISTIAN TEACHERS</h2>

        <ul className="list-disc">
          <li>
            The Christian teachers will maintain a soft and tender heart to the prompting of the Holy
            Spirit during interactions with students and continua attitude and practice of prayers. Yet
            Christian teachers and educators must never allow prayers to cover up poor planning
            and teaching method and academic standard (See Christ - Centred concept and
            academic standards)
          </li>
          <li>
            Since all truth is God&apos;s truth, as Christian teachers, we must utilise the wealth of
            knowledge and technology through research and innovative learning in an effort to with
            excellence.
          </li>
          <li>
            We are to teach with the gift of wisdom not only by using the best curriculum content but
            also using the wisest methods to ensure that our act of service is in partnership with the
            supernatural work of the Holy Spirit in raising responsive disciples and fit for the master&apos;s
            use. {" "}<strong className="text-xs">(Col.1v28)</strong>
          </li>
        </ul>

        <p>
          Christian educators and teachers must enshrine prayer and worship in the heart of the whole
          school if the Holy Spirit is indeed to be the catalyst to effective teaching which would open the
          door to true knowledge, wisdom, understanding and power necessary for learners responsible
          and responsive experiences.
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">B. THE LEARNERS (STUDENTS AS IMAGE OF GOD) AND HOLY SPIRIT:</h2>

        <p>
          The second area of the Holy Spirit&apos;s ministry related to the teaching and learning process is that
          of the students. No matter how gifted or spiritual a teacher may be, learning and growth towards
          Christlikeness will not take place unless the students are made aware and allow the Holy Spirit
          to work on his or her heart.
        </p>

        <p>
          Teachers will find some challenges with some of the students, even Jesus&apos;s teaching ministry
          was limited at times to hardness of His students hearts{" "}
          <strong className="text-xs">(Matt.13:15,53-58)</strong> at one time Christ
          rebuked the disciples for not having softs to what he was try to teacher them{" "}
          <strong className="text-xs">(Mark 8:17-21)</strong>
        </p>

        <p>
          The learners should regularly be exposed to the Holy Spirit Apostolic prayer of Apostle Paul{" "}
          <strong className="text-xs">(Eph.1v18)</strong> concerning believers "that the eyes of your heart may be enlightened so that they
          may know the blessing of Christ on an experiential level. This atmosphere is activated during
          assemblies, classroom prayer and prophetic drama presentations. In such an atmosphere
          illumination or enlightenment is conceived by the Holy Spirit thereby enabling students to
          perceive what God has revealed through His mind.
        </p>

        <p>
          The trinity module experience enables the students to know and understand spiritual insight and
          apply them within their lives and to the outside community.
        </p>

        <p>
          As a Christian teacher and leader of learners should regularly open up various opportunities for
          the full expression of the Holy Spirit, engaging the students for holy and godly living{" "}
          <strong className="text-xs">(Eph.5:18, 2 Peter 1:3)</strong>
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">C. THE WORD OF GOD - FATHER&apos;S HEART</h2>

        <p>
          The revealed truth of God by the Holy spirit in the third dimension in the teaching and learning
          process. Because of the objective nature, the word of God provides the foundation for the work
          of the Holy Spirit in a Christian curriculum{" "}
          <strong className="text-xs">(2 Tim.3v16-17)</strong>
        </p>

        <p>
          This objective revelation of God&apos;s word was not made by an act of human will, but Holy men
          moved by the Holy Spirit spoke from God{" "}
          <strong className="text-xs">(2 Peter 1v21)</strong> Jesus says the words that He speaks
          are spirit and life{" "}
          <strong className="text-xs">(John 6:63)</strong>
        </p>

        <p>
          As the word of God is the foundation of truth, it must be used as the final test to distinguish truth
          from error (Trinity module). As the Christian curriculum reflects the Father&apos;s heart through His
          objective word of truth, is able to transform, save, renew the mind in the ways of God.
        </p>

        <p>
          Our teaching and learning must find its root in the Trinity module (Edusoul Christ - Centred
          curriculum) as our bedrock or foundation of every experience for the future stronghold.
        </p>

        <p>
          Teachers should not build students&apos; hope upon faulty foundation and as pseudo - Christian
          philosophies. Their future will suffer losses{" "}
          <strong className="text-xs">(Luke 6v48)</strong> (See teachers and Parents with vision
          Module)
        </p>

        <p>
          Teachers with the help of the Holy Spirit have the responsibility to reveal the Father&apos;s heart in all
          subject topics, giving the students an accurate view of the word of God and Christlikeness in the
          community.
        </p>

        <p>
          The word of God in the curriculum gives students conviction and a philosophical outlook. It
          permeates the students&apos; way of thinking, moral judgement, conversation, decision, wise choices
          and relationships and sphere of influence.
          It is the last court of apple for moral questions.
        </p>

        <p>
          The future of Christianity and the Christian institution is at stake without revival and the return to
          biblical roots, the Christian education and educators will compromise and blend with the society
          that we are supposed to preserve and influence{" "}
          <strong className="text-xs">(Salt and Light Matt.5v16)</strong>
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">D. INTERPERSONAL AND INTERACTION WITH THE HOLY SPIRIT</h2>

        <p>
          The revelation of the fourth dimension of the Holy Spirit in the interpersonal and interaction
          within Christ - centred curriculum.
          All moral, governmental, doctrinal, Spiritual issues are all in a state of confusion with the
          objective word of truth and the Holy Spirit in core foundation of teaching and learning. True
          Christian education and discipleships are outworking of the Holy Spirit where all morality and
          character begins with the word of God and fruit of the Spirit.
          The act of teaching and learning that have bought into relativistic and natural philosophy have
          raised a shallow cross - less, purposeless students that have a chance to be salt and light to
          relativistic, humanistic and directionless society.
        </p>

        <ul className="list-disc">
          <li>
            Teaching and learning through the lens of Scripture with the Holy Spirit will equip and
            enable your students to view life events and experiences from a biblical perspective,
          </li>
          <li>Shape their attitude</li>
          <li>Good choices</li>
          <li>Family relationships</li>
          <li>Their life values principles are based on biblical values</li>
          <li>material possession become less important than godly character and people (Matt.5:6,7)</li>
        </ul>

        <p>
          Our sense of interpersonal relationship within the school community is rooted in our faith
          commitment. The school, teacher and student agreement reflects God&apos;s covenant of grace with
          us by the Holy Spirit.
        </p>

        <p>
          We are neither teacher - centred, child - centred, but Christ - centred. In our interpersonal
          interaction Jesus allows us to live as responsive disciples. He offers redemption to each person
          in the school, and allows us to use God&apos;s creation for His glory.
        </p>

        <p>
          Our creativity uses the school assembly, drama and peer mediator to develop a sense of grace,
          walk and preferring others. Teacher to students and students to each other prophetic prayer of
          God&apos;s grace. Loco - parentis became students of their learners, discovering who each child was
          created to be by God.
        </p>
      </section>

      <section className="lesson-section">
        <h2 className="title">E. THE ENVIRONMENT AND ATMOSPHERE WITH THE HOLY SPIRIT</h2>

        <p>
          The fifth dimension of the Holy Spirit&apos;s work in the teaching and learning process in the
          environment.
        </p>

        <p>
          Environment or contextual factors in Christian education is empowering space. While some of
          the physical elements (class structure, display and posters) may seem too common to relate to
          the supernatural work of the Holy Spirit, we must remember that God has used such physical
          elements to set the environment for spiritual learning empowering experiences such as Moses
          by the burning bush. Jesus and the temple building, Paul and philosophers in the Areopagus.
        </p>

        <p>
          There must be intentionality, in walking in the Spirit, praying in the spirit and seeking God&apos;s
          tangible presence through the posting on the walls, children&apos;s display walk and setting of the
          school environment from the entrance; such an empowering ambiance of the Holy Spirit.
        </p>

        <p>Ref. Assignment</p>
      </section>
    </div>`,
            assignment: "Assignment and Research Project",
          },
        ],
      },
      {
        id: 4,
        title: "EDSD MODULE 2.4 - Acts of Christian Education and Standards",
        units: [
          {
            title: "THE STANDARD OF ACADEMIC CONCEPT",
            note: `<div className="content-container">
      <section className="lesson-section">
        <h2 className="title">TEACHER, CLASSROOM CURRICULUM AND STANDARD.</h2>

        <p>
          <h3>CURRICULUM DELIVERY AND STANDARD</h3><br />
        
          Class teachers skill of planning and learning must ensure the coverage of all subjects e.g theory of music, Act and
          craft and ICT, Eng. Maths. Science, Design Tech, Social Studies, PSHE within Christ centred curriculum (See case
          study of practical approach to Christian Education. Crown Hope Inter. Academy in Module 3.2 unit 1)
          Lesson planning content should demonstrate relevant source verse, Father&apos;s heart, teacher&apos;s in depth knowledge of
          topic objective, skillful in mixed ability and effective learning styles with the use of resources and differentiation of
          work tasks.<br />

          The implementation of lesson delivery methodology, and incorporating outdoor educational visits is the hallmark of an
          outstanding curriculum.
        </p>

        <ul className="list-disc">
          <li>
            Early intervention of pupils&apos; note copying during lesson work tasks.
          </li>
          <li>
            Note Book Scrutiny - good presentation, grammar, spelling and handwriting.
          </li>
        </ul>
        <p>
          The rationale of the system of small numbers of pupils to teacher ratio, enables an effective curriculum deliver
        </p>

        <ul className="list-disc">
          <li>
            Teacher&apos;s skill to engage all abilities
          </li>
          <li>
            Teacher&apos;s early intervention support for the lower ability age group.
          </li>
          <li>
            Effectively challenging the upper ability group.
          </li>
          <li>
            Increase of gracious interpersonal bonding and discipling relationship with the students.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2 className="title">THE STANDARD OF ACADEMIC CONCEPT</h2>
        <p>
          What are the effective teaching standards (see effective teaching and learning policy of Chrysolyte Christian School
          and Crown Hope Schools)<br />
          - our students must acquire new knowledge experiences, increase subject understanding and develop their critical
          thinking, and applicable skills… (concrete and abstract methodology)<br />
          - To show and teach students to apply intellectually, creative effort, to show interest in their work and to think and
          work hard for themselves, good hand writing skills, work books well utilise.<br />
          - Teachers should demonstrate good subject knowledge (research and resources), leads to excellent lesson plan,
          effective teaching methods and appropriate activities suited for each ability need are used as well as lesson time is
          managed wisely.<br />
          - Teachers should demonstrate good understanding of the prior attainments, aptitudes and needs of the pupils and
          lessons are planned accordingly.<br />
          - Good knowledge and utilisation of subject and classroom resources effectively in all lessons to broaden knowledge
          and cross-curricular activities.<br />
          - School and teacher&apos;s framework in place to assess pupil&apos;s progress regularly, thoroughly and deliberately use
          information from such continuous assessments, progress tracker to plan further teaching.<br />
          - The atmosphere of the class are the reflection of the teachers&apos; aspiration and high standard expectations, promote
          students self discipline, leading by example your classroom, book shelves, wall display are well organised and
          management of teacher&apos;s work space, adherence to class and school rules and time table, consistent uniform
          handwriting practice and standard, completion of tasks and homework on time, use of behaviour chart, awards and
          assembly commendation etc.
          - The School has in place, a framework for pupils progress and performance tracker..
        </p>

        <ul className="list-disc">
          <li>
            The School has in place a framework for evaluation, monitoring and standards (Classroom, lesson
            observation and pupils&apos; book scrutiny) by the head of School
          </li>
        </ul>

        <p>
          - As a Christian School, we aim to provide quality and effective education for all students within the class, including
          pupils with special educational needs… as well as challenging pupils to attain above average and excellent results in
          all examinations.<br />
          - We aim to adequately prepare all pupils holistically for the opportunities, responsibilities and responsive adult life on
          the global stage..
        </p>

        <p>
          UNIT 4. LEARNING THEORY FOR CHRISTIAN TEACHER<br />
          UNIT 5. CROSS CURRICULAR PLANNING & TEACHING<br />
          UNIT 6. ASSESSMENTS : TYPES AND PURPOSES<br />
          ASSIGNMENT<br />

          MODULE 5.2 - CHILD PSYCHOLOGY / PHYSIOLOGY : EVERY CHILD MATTERS<br />
          UNIT 1. CHILD AND BRAIN DEVELOPMENT<br />
          UNIT 2. BEHAVIOURAL MANAGEMENT (DISCIPLINE)<br />
          UNIT 3. EXPLORING CHILD PSYCHOLOGY<br />
          UNIT 4. APPLIED PSYCHOLOGY IN CHRISTIAN EDUCATION<br />
          MODULE 6.2 - EVERY CHILD MATTERS<br />
          UNIT 1. FIXED V GROWTH MINDSETS IN THE CLASSROOM<br />
          UNIT 2 UNDULATING MINDSET<br />
          UNIT 3. SAFEGUARDING / HEALTH MATTER (CHILD AND SCHOOL ENVIRONMENT)<br />
          MODULE 7.2 - CHARACTERISTICS OF A CHRISTIAN TEACHER - A ROLE MODEL<br />
          UNIT 1 THE REFLECTIVE TEACHER<br />
          UNIT 2. THE EMPATHETIC TEACHER<br />
          UNIT 3. COMPETENT V INCOMPETENT TEACHER<br />
          UNIT 4. CREATIVE WORSHIP AND DECODING SPIRITUAL GIFTS<br />
          ASSIGNMENT<br />
          EDUSOUL FINAL PROJECT ASSESSMENT: PERSONAL PROFESSIONAL PROFILE
          CREATING PERSONAL DEVELOPMENT PLAN AS AN EDUSOUL EDUCATOR
          REFLECTION ON KEY LEARNINGS TAKEN AWAY FROM THE COURSE TO
          COMPILE A 3,000 WORD PROFESSIONAL DEVELOPMENT PROFILE FOR THE PURPOSE OF
          EQUIPPING YOURSELF AS A SERVANT LEADER IN CHRISTIAN EDUCATION; FOCUSING ON
          THE TRINITY MODULE, HOLISTIC KINGDOM CULTURE, CHRISTIAN WORLDVIEW, YOU AND
          THE HOLY SPIRIT IN THE CLASSROOM TO SHOWCASE PROACTIVE-NESS AS AN ASPIRING
          21ST CENTURY CHRISTIAN EDUCATOR.
        </p>
      </section>
    </div>`,
            assignment: "Assignment and Research Project",
          },
        ],
      },

      {
        id: 5,

        title:
          "EDSD MODULE 2.5 - Child Psychologists / Physiology: Every Child Matters 1",
        units: [
          {
            title: "Child and Brain Development 1",
            note: "",
            assignment: "Assignment",
          },
          {
            title: "Behavioural Management (Discipline)",
            note: "",
            assignment: "Assignment",
          },
          {
            title: "Exploring Child Psychology",
            note: "",
            assignment: "Assignment",
          },
          {
            title: "Applied Psychology in Christian Education 1",
            note: "",
            assignment: "Assignment",
          },
          {
            title: "Fixed in Growth Mindsets in the Classroom",
            note: "",
            assignment: "Assignment",
          },
          {
            title: "Undulating Mindset",
            note: "",
            assignment: "Assignment",
          },
        ],
        assignment: "Assignment",
      },
      {
        id: 6,

        title: "EDSD MODULE 2.6 - Every Child Matters Part 2",
        units: [
          {
            title: "Police and Practice",
            note: "",
            assignment: "Assignment",
          },
          {
            title:
              "Safeguarding / Health Matters (Child and School Environment)",
            note: "",
            assignment: "Assignment",
          },
        ],
        assignment: "Assignment",
      },
      {
        id: 7,

        title:
          "EDSD MODULE 2.7 - Character of a Christian Teacher and Role Model",
        units: [
          {
            title: "The Reflective Teacher 1",
            note: "",
            assignment: "Assignment",
          },
          {
            title: "The Empathetic Teacher 1",
            note: "",
            assignment: "Assignment",
          },
          {
            title: "Competent in Incompetent Teacher 1",
            note: "",
            assignment: "Assignment",
          },
          {
            title: "Creative Worship and Decoding Spiritual Gifts",
            note: "",
            assignment: "Assignment",
          },
        ],
        assignment: "Assignment",
      },
    ],
    finalProject: {
      title: "EDUSOUL Final Project: Personal Professional Profile",
      description:
        "Creating a Personal Development Plan as an Edusoul AD. Reflection on key learnings from the course to compile a 3,000-word Professional Development Profile for equipping yourself as a servant leader in Christian education. The project focuses on the Trinity, holistic kingdom culture, Christian worldview, and the role of the Holy Spirit in the classroom to showcase your abilities as a Christ-centred educator.",
    },
  },
  {
    id: 3,
    title:
      "Enhanced Professional Development Certificate in Christian Education",
    imgURL: "/leadership.png",
    price: "125.00",
    price2: "220.00",
    snippet:
      "Designed for educators who are seeking to synergise Christ-centred curriculum into their teaching practices, thereby creating a more meaningful and impactful learning experience for their students.",
    intro: [
      "Are you a teacher or educator looking to deepen your knowledge and teaching skills through a Christ-centered learning programme? Our Enhanced professional development certificate programme in teaching and education may be the perfect fit for you.",
      "This programme is designed for educators who are seeking to synergise Christ-centred curriculum into their teaching practices, thereby creating a more meaningful and impactful learning experience for their students. Through a combination of online courses, workshops, and research projects, participants explore how to infuse their teaching with Christian principles and values.",
      "The curriculum covers a wide range of topics, including biblical integration in the classroom, creating a culture of faith and respect, and incorporating prayer and worship into daily units.",
      "Participants also learn strategies for fostering a sense of community and collaboration among students and stakeholders, as well as how to address challenging issues from a Christian perspective.",
      "One of the key benefits of this programme is the opportunity to connect with other like-minded educators who share your passion for Christ-centered teaching. Through group discussions, peer feedback, and collaborative projects, participants have the chance to learn from others and expand their professional network.",
      "Upon successful completion of the programme, participants receive a certificate that demonstrates their commitment to integrating faith into teaching practice. This credential can help you stand out in the competitive field of education and open up new career opportunities.",
      "If you are ready to take your teaching to the next level and make a lasting impact on your students, consider enrolling in our Enhanced professional development certificate programme in teaching and education. Let us help you grow professionally and spiritually as you strive to create a more Christ-centered classroom.",
    ],
    modules: [
      {
        id: 1,

        title: "EDSD MODULE 2.1 - HEART FOUNDATION",
        units: [
          {
            title: "The Heart and Vision of Christian Educator Part 1 & 2",
            note: "",
            assignment: "",
          },
          {
            title: "Christian in Secular Worldview",
            note: "",
            assignment: "",
          },
          {
            title: "Calling of a Christian Teacher",
            note: "",
            assignment: "",
          },
          {
            title: "Aims of Christian Education",
            note: "",
            assignment: "",
          },
          {
            title:
              "Holy Spirit in Teaching and Learning Process (Holistic Culture) 1",
            note: "",
            assignment: "",
          },
          {
            title: "Foundation for Christian Education Part 1 & 2",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
      {
        id: 2,

        title:
          "EDSD MODULE 2.2 - Christ-Centred Curriculum and Effective Standards",
        units: [
          {
            title: "Christ-Centred Curriculum and Delivery 1 & 2",
            note: "",
            assignment: "",
          },
          {
            title:
              "Acts of Gifted Teaching (Mixed Ability) Resources & Methodologies",
            note: "",
            assignment: "",
          },
          {
            title: "Teaching and Learning Styles",
            note: "",
            assignment: "",
          },
          {
            title: "Stimulating Learning Environment and Displays",
            note: "",
            assignment: "",
          },
          {
            title: "Learning Theory for Christian Teacher Part 2",
            note: "",
            assignment: "",
          },
          {
            title: "Cross-Curricular Planning & Teaching 1",
            note: "",
            assignment: "",
          },
          {
            title: "Assess: Types and Purposes 1",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
      {
        id: 3,

        title:
          "EDSD MODULE 2.3 - Child Psychologists / Physiology: Every Child Matters 1",
        units: [
          {
            title: "Child and Brain Development 1",
            note: "",
            assignment: "",
          },
          {
            title: "Behavioural Management (Discipline)",
            note: "",
            assignment: "",
          },
          {
            title: "Exploring Child Psychology",
            note: "",
            assignment: "",
          },
          {
            title: "Applied Psychology in Christian Education 1",
            note: "",
            assignment: "",
          },
          {
            title: "Fixed in Growth Mindsets in the Classroom",
            note: "",
            assignment: "",
          },
          {
            title: "Undulating Mindset",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
      {
        id: 4,

        title: "EDSD MODULE 2.4 - Every Child Matters Part 2",
        units: [
          {
            title: "Police and Practice",
            note: "",
            assignment: "",
          },
          {
            title:
              "Safeguarding / Health Matters (Child and School Environment)",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
      {
        id: 5,

        title:
          "EDSD MODULE 2.5 - Character of a Christian Teacher and Role Model",
        units: [
          {
            title: "The Reflective Teacher 1",
            note: "",
            assignment: "",
          },
          {
            title: "The Empathetic Teacher 1",
            note: "",
            assignment: "",
          },
          {
            title: "Competent in Incompetent Teacher 1",
            note: "",
            assignment: "",
          },
          {
            title: "Creative Worship and Decoding Spiritual Gifts",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
    ],
    finalProject: {
      title: "EDUSOUL Final Project: Personal Professional Profile",
      description:
        "Creating a Personal Development Plan as an Edusoul AD. Reflection on key learnings taken away from the course to compile a 5,000-word Professional Development Profile for equipping yourself as a servant leader in Christian education. The project focuses on the Trinity, holistic kingdom culture, Christian worldview, and the role of the Holy Spirit in the classroom to showcase proactiveness as an aspiring 21st-century Christian educator.",
    },
  },
  {
    id: 4,
    title: "Post Graduate Certificate in Christian Education",
    imgURL: "/headphones.png",
    price: "100.00",
    price2: "170.00",
    snippet:
      "A specialised programme designed for individuals seeking to deepen their understanding of Christian teachings and principles, as well as enhancing their skills in teaching and ministry.",
    intro: [
      "Our post graduate certificate in Christian education is a specialised programme designed for individuals seeking to deepen their understanding of Christian teachings and principles, as well as enhancing their skills in teaching and ministry.",
      "This programme is ideal for those who are already working in a school, church, or Christian organisation and want to further their education in order to better serve their community.",
      "The syllabus of our post graduate certificate in Christian education is pivoted in a Christ-centred programme of studies typically covering a range of topics, including biblical studies and application, Christian ethics, holistic nurturing, and principles of teaching and leadership.",
      "Students explore the foundations of Christ-centred curriculum and faith, learn how to effectively communicate, and develop the necessary skills to lead and manage educational programmes within an inclusive Christian setting. To successfully complete this programme, students are expected to complete given research topics for every module.",
      "If you are interested in enrolling in our Post Graduate Certificate in Christian Education Programme, we encourage you to contact us for more information.",
      "Together, we can help inspire and empower the next generation of contemporary Christian educators.",
    ],
    modules: [
      {
        id: 1,

        title: "EDSD MODULE 2.1 - HEART FOUNDATION",
        units: [
          {
            title: "The Heart and Vision of Christian Educator Part 1 & 2",
            note: "",
            assignment: "",
          },
          {
            title: "Christian in Secular Worldview",
            note: "",
            assignment: "",
          },
          {
            title: "Calling of a Christian Teacher",
            note: "",
            assignment: "",
          },
          {
            title: "Aims of Christian Education",
            note: "",
            assignment: "",
          },
          {
            title:
              "Holy Spirit in Teaching and Learning Process (Holistic Culture) 1",
            note: "",
            assignment: "",
          },
          {
            title: "Foundation for Christian Education Part 1 & 2",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
      {
        id: 2,

        title:
          "EDSD MODULE 2.2 - Christ-Centred Curriculum and Effective Standards",
        units: [
          {
            title: "Christ-Centred Curriculum and Delivery 1 & 2",
            note: "",
            assignment: "",
          },
          {
            title:
              "Acts of Gifted Teaching (Mixed Ability) Resources & Methodologies",
            note: "",
            assignment: "",
          },
          {
            title: "Teaching and Learning Styles",
            note: "",
            assignment: "",
          },
          {
            title: "Stimulating Learning Environment and Displays",
            note: "",
            assignment: "",
          },
          {
            title: "Learning Theory for Christian Teacher Part 2",
            note: "",
            assignment: "",
          },
          {
            title: "Cross-Curricular Planning & Teaching 1",
            note: "",
            assignment: "",
          },
          {
            title: "Assess: Types and Purposes 1",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
      {
        id: 3,

        title:
          "EDSD MODULE 2.3 - Child Psychologists / Physiology: Every Child Matters 1",
        units: [
          {
            title: "Child and Brain Development 1",
            note: "",
            assignment: "",
          },
          {
            title: "Behavioural Management (Discipline)",
            note: "",
            assignment: "",
          },
          {
            title: "Exploring Child Psychology",
            note: "",
            assignment: "",
          },
          {
            title: "Applied Psychology in Christian Education 1",
            note: "",
            assignment: "",
          },
          {
            title: "Fixed in Growth Mindsets in the Classroom",
            note: "",
            assignment: "",
          },
          {
            title: "Undulating Mindset",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
      {
        id: 4,

        title: "EDSD MODULE 2.4 - Every Child Matters Part 2",
        units: [
          {
            title: "Police and Practice",
            note: "",
            assignment: "",
          },
          {
            title:
              "Safeguarding / Health Matters (Child and School Environment)",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
      {
        id: 5,

        title:
          "EDSD MODULE 2.5 - Character of a Christian Teacher and Role Model",
        units: [
          {
            title: "The Reflective Teacher 1",
            note: "",
            assignment: "",
          },
          {
            title: "The Empathetic Teacher 1",
            note: "",
            assignment: "",
          },
          {
            title: "Competent in Incompetent Teacher 1",
            note: "",
            assignment: "",
          },
          {
            title: "Creative Worship and Decoding Spiritual Gifts",
            note: "",
            assignment: "",
          },
        ],
        assignment: "",
      },
    ],
    finalProject: {
      title: "EDUSOUL Final Project: Personal Professional Profile",
      description:
        "Creating a Personal Development Plan as an Edusoul AD. Reflection on key learnings taken away from the course to compile a 6,000-word Professional Development Profile for equipping yourself as a servant leader in Christian education. The project focuses on the Trinity modules, holistic kingdom culture, Christian worldview, and the role of the Holy Spirit in the classroom to showcase proactive-centre Christian educator.",
    },
  },
  {
    id: 5,
    title: "S.E.N.D (Special Educational Needs and Disabilities)",
    imgURL: "/leadership.png",
    price: "259.00",
    price2: "350.00",
    snippet:
      "In the world of education, it is essential to have a clear understanding of the different types of disabilities, their spectrums and how they can impact learning.",
    intro: [
      "Disability is a broad term that encompasses a wide range of physical, cognitive, sensory, and mental health impairments that can impact ability to participate in diverse activities.",
      "In the world of education, it is essential to have a clear understanding of the different types of disabilities, their spectrums and how they can impact learning. Participants in this programme receive the training that can better support the needs of their students and create inclusive learning environments.",
      "Our programme facilitates the understanding and recognition of the unique challenges faced by students with disabilities; how to create inclusive and supportive learning environments, accessibility to curriculum and the proficiency required.",
      "To successfully complete this programme, students are expected to complete given research topics for every module.",
      "If you are interested in enrolling in our S.E.N.D Course, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of Christian educators.",
    ],
    modules: [
      {
        id: 1,

        title: "EDSD MODULE 5.1 - HEART FOUNDATION",
        units: [
          "The Heart and Vision of Christian Educator / Special Education Leader Part 1-3",
          "Leadership (Calling of a Special Education Christian Educator/Leader)",
          "Role of a Special Education Needs Christian Educator/Leader",
          "Exploring Historical Perspective on Special Education Needs",
          "Christian in Circular Worldview on Special Education and Disability Needs",
          "Christ-Centred Curriculum and Effective Standards",
        ],
        assignment: "Assignment",
      },
      {
        id: 2,

        title: "EDSD MODULE 5.2 - Types of Disabilities",
        units: [
          "Classification of Disabilities",
          "Physical Disabilities",
          "Cognitive Disabilities",
          "Sensory Disabilities",
          "Mental Health Disabilities",
          "Chronic Health Conditions",
        ],
        assignment: "Assignment",
      },
      {
        id: 3,

        title: "EDSD MODULE 5.3 - Curriculum and Standards Part 1 & 2",
        parts: [
          {
            part: "Part 1",
            units: [
              "Bespoke Christ-Centred Curriculum Development",
              "Accessing / Delivery of Curriculum",
              "Exploring Teaching Methods and Methodologies",
              "Acts of Gifted Teaching / Effective Use of Resources",
              "Cross Curricular Approach: Planning and Teaching",
            ],
          },
          {
            part: "Part 2",
            units: [
              "Didactic Learning Process and Styles",
              "Stimulating Learning Environment and Displays",
              "Direct / Indirect Assessments",
              "Holy Spirit in Teaching / Learning - Holistic Culture",
            ],
          },
        ],
        assignment: "Assignment and Research Project",
      },
      {
        id: 4,

        title:
          "EDSD MODULE 5.4 - Every Child Matters / Every Child is Unique / Every Child Can Achieve",
        units: [
          "Exploring Universal / National Policies and Practices 1 & 2",
          "Safeguarding / Health Matters (Child and School Environment) 1 & 2",
          "Effective Communication",
          "Exploring Behavioural Management (Group Exercises)",
        ],
      },
      {
        id: 5,

        title: "EDSD MODULE 5.5 - Character of a Christian Teacher",
        units: [
          "The Reflective Teacher 1",
          "The Empathetic Teacher 1",
          "The Competent Teacher 1",
          "Creative Worship and Decoding Spiritual Gifts",
        ],
        assignment: "Assignment",
      },
      {
        id: 6,

        title: "EDSD MODULE 5.6 - Educational Physiology & Child Psychologists",
        units: [
          "Child and Brain Development 1",
          "Child and Brain Development 2",
          "Learning Through Sports",
          "Exploring Child Psychology 1 & 2",
          "Applied Psychology in Christian Education 1 & 2",
        ],
        assignment: "Assignment and Research",
      },
    ],
  },
  {
    id: 6,
    title: "CHRISTIAN SCHOOL HEADSHIP/LEADERSHIP",
    imgURL: "/headphones.png",
    price: "40.00",
    price2: "80.00",
    snippet:
      "The course emphasises the importance of building strong relationships within the school community.",
    intro: [
      "Our Christian School Headship/Leadership course is designed to equip participants with the necessary skills and knowledge to effectively lead and manage a proactive Christian school.",
      "This course covers a wide range of topics including Christ-centred curriculum, biblical principles of leadership, educational administration, spiritual formation, and school governance.",
      "The course emphasises the importance of building strong relationships within the school community. Participants learn how to effectively communicate with stakeholders, resolve conflicts, and create a positive and inclusive school environment. They are encouraged to develop their own leadership style and to cultivate the qualities of humility, integrity, and servant leadership.",
      "Participants are encouraged to develop a strong foundation in Christian worldview and values, which will guide their decision-making and actions as contemporary school leaders. They are challenged to think critically about how to create a holistic school culture that reflects these values and fosters growth in students and staff.",
      "Throughout the course, participants are given opportunities to apply their learning in real-world contexts through case studies, group projects, and research exercises. They are encouraged to reflect on their own experiences and seek feedback from mentors and peers. By the end of the course, successful participants will have developed a comprehensive understanding of the complexities of school leadership and be equipped to lead with confidence and purpose in a Christian school setting.",
      "If you are interested in enrolling in our Christian School Headship/Leadership course, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of Christian school leaders.",
    ],
  },
  {
    id: 7,
    title: "Christian School Proprietorship",
    imgURL: "/leadership.png",
    price: "40.00",
    price2: "85.00",
    snippet:
      "The course provides its participants with the knowledge and skills needed to successfully run a proactive Christian school.",
    intro: [
      "Are you an ardent visioner who is seeking positive societal change; one who is avid about raising/nurturing nation builders (pillars not caterpillars)? If so, our Christian School Proprietorship programme may be just what you need.",
      "This Christian school proprietorship course is designed for those who are acutely aware that schools are microcosms of society; that nations are built in the classroom.",
      "The course provides its participants with the knowledge and skills needed to successfully run a proactive Christian school. It covers a wide range of topics, including work ethics, educational philosophy, curriculum development, management and administration; policies and practice, team building, pivoted in a Christ-centred worldview.",
      "A key benefit of taking our Christian school proprietorship course is the opportunity to learn from experienced educators and administrators who have a deep understanding of the unique challenges and opportunities that come with running a Christian school in the 21st century. These instructors provide valuable insights and guidance that help course participants navigate the complexities of school management and leadership.",
      "In addition to learning from experienced professionals, our Christian school proprietorship course also provides participants with the opportunity to network with other proprietors who are passionate about education and share a commitment to Christian values. This networking can lead to valuable connections and collaborations that can help course participants grow their schools and make positive impacts in their communities.",
      "If you are interested in enrolling in our Christian School Proprietorship Course, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of Christian school proprietors/leaders.",
    ],
    modules: [
      {
        title: "EDSD PART A - Whole School Development Plan",
        units: [
          "Heart Foundation Module (Units 1 - 6)",
          "Whole School Grading Standard Framework",
          "Curriculum Evaluation and Monitoring Standards Framework",
          "Headship",
        ],
        assignment: "Assignment",
      },
      {
        title: "EDUSOUL MODULE PART B",
        units: [
          "Christ-Centred Curriculum Development",
          "Transformational Leadership in Education",
          "Quality Performance Management Audit - QPMA",
          "Holy Spirit in Teaching and Learning Process (Holistic Culture and Practice)",
          "21st Century Distinctive Educator",
        ],
        assignment: "Assignment",
      },
      {
        title: "EDUSOUL MODULE PART C",
        units: [
          "Whole School Policies and Practices (1 - 4)",
          "Safeguarding / Health and Safety (Children and School Environment)",
          "Effective School Administration and Communication System Networking and Inspectorate Framework",
        ],
      },
      {
        title: "EDUSOUL PART D",
        units: [
          "School Management Structure",
          "Market Research and Development Plan",
          "Legal Framework and Regulatory Authorities",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "SENIOR / MIDDLE MANAGEMENT",
    imgURL: "/book.png",
    price: "259.00",
    price2: "350.00",
    snippet:
      "Throughout the course, students explore topics such as: visionary leadership, intersection of faith, work ethics, effective communication, conflict resolution, team building, strategic planning, policies and practice.",
    intro: [
      "As a Christian school senior/middle management student, the course prepares you to take on a significant leadership role within your school community. This course is designed to equip its participants with the tools and knowledge rooted in a Christ-centred curriculum, needed to excel in this position while upholding the values and principles of the Christian faith.",
      "Throughout the course, students explore topics such as: visionary leadership, intersection of faith, work ethics, effective communication, conflict resolution, team building, strategic planning, policies and practice. These skills are essential for leading a team of educators and staff members in a way that fosters a positive and productive work environment. Participants learn that by applying these principles within the context of Christian values, they will be able to lead with integrity and compassion.",
      "The opportunity to reflect on biblical principles and how they inform decision-making and approach to leadership is an integral part of the course. By grounding leadership practices in the teachings of Christ, participants are empowered to lead with humility, servant-heartedness, and a focus on the well-being of others – altruistic leadership.",
      "As participants progress through this course, they have the opportunity to engage with peers and instructors in meaningful discussions and activities that deepen understanding of altruistic/effective leadership within a Christian context. By the end of this course, successful participants will be well-equipped to take on the challenges and responsibilities of a senior/middle management role in a contemporary Christian school setting.",
      "If you are interested in enrolling in our Senior/Middle Management Course, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of altruistic Christian educators.",
    ],
    modules: [
      {
        title: "EDSD PART A - Whole School Development Plan",
        units: [
          "Heart Foundation Module (Units 1 - 6)",
          "Whole School Grading Standard Framework",
          "Curriculum Evaluation and Monitoring Standards Framework",
          "Headship",
        ],
        assignment: "Assignment",
      },
      {
        title: "EDUSOUL MODULE PART B",
        units: [
          "Christ-Centred Curriculum Development",
          "Transformational Leadership in Education",
          "Quality Performance Management Audit - QPMA",
          "Holy Spirit in Teaching and Learning Process (Holistic Culture and Practice)",
          "21st Century Distinctive Educator",
        ],
        assignment: "Assignment",
      },
      {
        title: "EDUSOUL MODULE PART C",
        units: [
          "Whole School Policies and Practices (1 - 4)",
          "Safeguarding / Health and Safety (Children and School Environment)",
          "Effective School Administration and Communication System Networking and Inspectorate Framework",
        ],
      },
      {
        title: "EDUSOUL PART D",
        units: [
          "School Management Structure",
          "Market Research and Development Plan",
          "Legal Framework and Regulatory Authorities",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "HOMESCHOOLING STARTUPS",
    imgURL: "/hat.png",
    price: "15.00",
    price2: "45.00",
    snippet:
      "This training covers a variety of topics, including holistic teaching, bespoke curriculum development, teaching (traditional/Montessori) methods, learning styles, assessment methods, and legal requirements for homeschooling.",
    intro: [
      "Homeschooling has become an increasingly popular choice for families seeking a more personalised and flexible education for their children. This programme is designed to train its participants in homeschooling methods and practices.",
      "Our homeschooling programme ensures that its participants have the skills and knowledge necessary to effectively support homeschooled students. This training covers a variety of topics, including holistic teaching, bespoke curriculum development, teaching (traditional/Montessori) methods, learning styles, assessment methods, and legal requirements for homeschooling. Participants must have an acceptable educational standard of competency in order to deliver the curriculum.",
      "To successfully complete this programme, students will be expected to complete given research topics in every module.",
      "If you are interested in enrolling in our Homeschooling Startup Course, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of Christian educators.",
    ],
    modules: [
      {
        title: "HOMESCHOOLING STARTUPS MODULE",
        units: [
          "Heart Foundation Module (Units 1 - 6)",
          "EDSD Module 5.3 Christ-Centred Curriculum and Effective Delivery 1 & 2",
          "Holy Spirit in Teaching and Learning Process",
          "EDSD Module 5.7 - Educational Physiology",
          "Applied Psychology in Christian Education 1",
          "Creative Worship and Decoding Spiritual Gifts",
          "Role of Technology in Modern Teaching",
          "Assessment and Types of Assessment 1 & 2",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "APPLIED (CHRIST -CENTRED) MONTESSORI DIPLOMA PROGRAMME",
    imgURL: "/leadership.png",
    price: "40.00",
    price2: "85.00",
    snippet:
      "This course provides a synergy of Montessori education and Christian values, offering a holistic approach to educating children.",
    intro: [
      "Are you looking to deepen your understanding of both Christian education and the Montessori method? If so, our Applied (Christ-centred) Montessori Diploma Course might be just what you need.",
      "The Applied (Christ-centred) Montessori Diploma Course is a comprehensive programme designed for educators who wish to incorporate Christian principles into the Montessori method of teaching. This course provides a synergy of Montessori education and Christian values, offering a holistic approach to educating children.",
      "The programme covers a wide range of topics, including child development, Montessori philosophy, curriculum planning, classroom/behavioural management, and didactic resource development/creation. It explores how to integrate biblical principles and teachings into the Montessori environment, creating a nurturing and spiritually enriching educational experience for children.",
      "Through this course, participants learn how to create a classroom environment that fosters spiritual growth, moral development, and a love for God: equipped with the tools and techniques to help children develop a personal relationship with Jesus Christ while also fostering independence, creativity, and a love for learning.",
      "Upon completion of the programme, participants receive a diploma certifying them as Applied (Christ-centred) Montessori teachers. This credential will not only validate their knowledge and expertise in Montessori education but also demonstrate their commitment to integrating Christian values into teaching practice.",
      "Overall, the course is a valuable resource which equips teachers with the knowledge, skills, and inspiration to create a transformative educational experience for children that nurtures their minds, hearts, and souls.",
      "Join us on this journey to transform education through the powerful combination of Christian principles and the Montessori method.",
      "If you are interested in enrolling in our Advanced (Christ-centred) Montessori Diploma Programme, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of Christian educators.",
    ],
  },
  {
    id: 11,
    title: "SCHOOL PLANTING COURSE",
    imgURL: "/book.png",
    price: "40.00",
    price2: "85.00",
    snippet:
      "Our school planting course is designed for those who are acutely aware that schools are microcosm of society; that nations are built in the classroom.",
    intro: [
      "Are you an ardent visioner who is seeking positive societal change; one who is avid about raising/nurturing nation builders (pillars not caterpillars)? If so, our school planting course may be just what you need.",
      "Our school planting course is designed for those who are acutely aware that schools are microcosms of society; that nations are built in the classroom.",
      "The course provides its participants with the knowledge and skills needed to successfully start and run a proactive Christian school.",
      "Starting a Christian school is a rewarding and impactful endeavour that can make a positive difference in the lives of students, communities and become a transformational tool in society - raising G3s - Godly, Global, Generations.",
      "This course introduces and robustly equips its participants with the skills necessary for starting and maintaining a Christian school with clear vision and mission which will include defining the school’s values, educational philosophy, policies and goals.",
      "Furthermore, its participants will learn the essentials necessary to create a strong foundation for the school by developing a comprehensive business plan, and securing necessary funding. This may involve fundraising efforts...",
      "If you are interested in enrolling in our School Planting Course, we encourage you to contact us for more information. Together, we can help inspire and empower the next generation of visionary Christian school leaders.",
    ],
  },
  {
    id: 12,
    title: "ADVANCE DIPLOMA CERTIFICATE PROGRAMME",
    imgURL: "/book.png",
    price: "40.00",
    price2: "85.00",
    snippet:
      "This program is designed to equip individuals with the knowledge and skills needed to excel in educational leadership roles within Christian schools.",
    intro: [
      "Are you animated about education and interested in taking your leadership skills to the next level? Our Advance Christian Diploma certificate program in Education and School Leadership may be the perfect programme for you.",
      "This program is designed to equip individuals with the knowledge and skills needed to excel in educational leadership roles within Christian schools. Whether you are a seasoned teacher looking to transition into a leadership position or a current school administrator seeking to enhance your leadership abilities, this program will provide you with the tools you need to succeed.",
      "Throughout the program, students explore topics such as educational leadership theory, school improvement strategies, curriculum development, and Christian ethics in education. With a strong emphasis on integrating faith-based principles into educational leadership practices, students learn how to lead with integrity, compassion, and a commitment to serving others.",
      "In addition to the academic coursework, students will also have the opportunity to engage in practical experiences, such as internships or field placements, to further enhance their learning and prepare them for success in the field.",
      "Upon successful completion of the program, students receive a certificate in Education and School Leadership, demonstrating their commitment to excellence in Christian education and readiness to lead with confidence and compassion.",
      "If you are ready to take the next step in your education and career, consider enrolling in our Advance Christian Diploma certificate program in Education and School Leadership. Join us in shaping the future of Christian education and making a positive impact on the lives of students and communities around the world.",
    ],
  },
];

export const coreValuesdata = [
  {
    id: 1,
    imgURL: "/assets/icons/trustsvg.svg",
    label: "Trust",
    description:
      "Building strong relationships through reliability and integrity.",
  },
  {
    id: 2,
    imgURL: "/assets/icons/category.svg",
    label: "Sustainability",
    description:
      "Promoting practices that ensure long-term environmental and social well-being.",
  },
  {
    id: 3,
    imgURL: "/assets/icons/truthfulness.svg",
    label: "Truthfulness",
    description:
      "Commitment to honesty and transparency in all actions and communications.",
  },
  {
    id: 4,
    imgURL: "/assets/icons/empowerment.svg",
    label: "Empowerment",
    description:
      "Encouraging and enabling individuals to take initiative and make impactful decisions.",
  },
  {
    id: 5,
    imgURL: "/assets/icons/inclusion.svg",
    label: "Inclusion",
    description:
      "Creating an environment where diverse perspectives are valued and everyone feels welcomed.",
  },
  {
    id: 6,
    imgURL: "/assets/icons/growth.svg",
    label: "Growth",
    description:
      "Fostering personal and professional development through continuous learning and improvement.",
  },
];

export const coreStudents = [
  {
    name: "Luke Okagha",
    courseId: 1, // Reference the course ID from coursesData
    modules: [
      {
        moduleId: 1,
        name: "Module 1",
        units: [
          {
            lessonId: 1,
            name: "Lesson 1",
            note: "Lesson note",
            completionStatus: "completed", // or "in progress", "not started"
          },
          // ... other units
        ],
      },
      // ... other modules
    ],
    startDate: "2024-09-18", // Use ISO 8601 format
    progress: 75, // Percentage completion
    enrollmentDate: "2024-09-15", // Use ISO 8601 format
    enrollmentStatus: "confirmed", // or "pending", "cancelled"
  },
  // ... other students
];

export const NotificationData = [
  {
    notificationId: "67890",
    title: "Upcoming Live Class",
    message:
      "Join the live class on 'Introduction to Programming' tomorrow at 10 AM.",
    createdAt: "2024-09-17T15:30:22Z",
    isRead: false,
    category: "LIVE_CLASS",
  },
  {
    notificationId: "12345",
    title: "Important Announcement",
    message: "New course materials have been added to the platform.",
    createdAt: "2024-09-18T18:26:53Z",
    isRead: false,
    category: "ADMIN",
  },

  {
    notificationId: "111222",
    title: "Assignment Reminder",
    message:
      "Don't forget to submit your 'Data Structures' assignment by Friday.",
    createdAt: "2024-09-16T12:00:00Z",
    isRead: false,
    category: "ASSIGNMENT",
  },
];
