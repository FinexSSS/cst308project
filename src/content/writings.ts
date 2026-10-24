import landing from "@/assets/landing-hero.png.asset.json";
import articleOne from "@/assets/article-1.png.asset.json";
import articleTwo from "@/assets/article-2.png.asset.json";
import articleThree from "@/assets/article-3.png.asset.json";
import articleFour from "@/assets/article-4.png.asset.json";

export const images = {
  landing: {
    url: landing.url,
    alt: "Illustration: a riverside village fair at sunset with bamboo stalls, a folk musician, families, boats and banners in Bangla",
  },
  villageFair: {
    url: articleOne.url,
    alt: "Illustration: a riverside village fair with bamboo stalls, clay toys and woven baskets, families walking among vendors, a temple visible across the water and boats along the shore",
  },
  shrineMusicGathering: {
    url: articleTwo.url,
    alt: "Illustration: an evening gathering in a shrine courtyard where a singer performs with drum and harmonium before a seated audience",
  },
  stagedFolkPerformance: {
    url: articleThree.url,
    alt: "Illustration: folk singers with ektara and dotara performing on a decorated festival stage before a seated audience and photographers",
  },
  passingOnTheSong: {
    url: articleFour.url,
    alt: "Illustration: an elderly folk musician teaching two younger learners with string instruments and a harmonium in a village courtyard",
  },
} as const;

export const publication = {
  name: "Shared Traditions in Bangladesh",
  course:
    "CST308: Religious Pluralism, Religious Freedom, and Dialogue in the Modern World",
  byline: "Shahriar Akram | CST308 Individual Project",
  submittedTo: "Nooha Sabanta Maula (NML), Brac University",
  date: "11 September, 2026",
  introHeading: "Introduction",
  intro: [
    "The meaning of a fair is different for the people that attend it. For some, it is part of a religious celebration. It's an opportunity for some to get to know their neighbours, attend a performance or visit a former childhood home. The various motivations to be there may coexist.",
    "Dr. Mahfuza Hilali shared her recollection of people celebrating cultural events in Durga Puja fairs and at the river banks in Shahjadpur where people of various communities were present. Shared traditions and religious difference – and what happens when participation is controversial? – is a question that haunts this website based on her memories. This project aims to answer that question by looking at festivals, the thought of the Baul, shrine traditions and the intersection between the Bengali cultural identity and the Muslim religious identity. Four articles complete the interview account, engaging it in conversation with ideas drawn from an annotated scholarly source. They reflect on the enjoyment of participating together, the challenges of this joint experience, and the decisions that can be made in passing on traditions. The goal is to examine daily culture that does not make the assumption that things were the same for everyone in the past. A tradition can bind a community together, but fail to give all voices a voice. The learning from both these experiences can feed into our thinking about what it means to live in meaningful co-existence in the present.",
  ],
  seriesHeading: "Four ways into shared cultural life",
  seriesIntro:
    "The first experience described in the series is one that is familiar to all: going to a fair. It then goes on to examine the meanings of the songs of the Bauls and the traditions of the shrines, and the conflict over cultural identity, as well as the difficulties in passing traditions on. These articles are to be read independently, but collectively they seek to answer the question: What makes people share the same cultural life in being different?",
} as const;

export type Section = { heading?: string; paragraphs: string[] };

export type Article = {
  slug: string;
  order: number;
  title: string;
  preview: string;
  opening: string[];
  sections: Section[];
  image: { url: string; alt: string };
  imageCaption: string;
  readingMinutes: number;
};

export const articles: Article[] = [
  {
    slug: "at-the-fair-who-gets-to-belong",
    order: 1,
    title: "At the Fair Who Gets to Belong",
    preview:
      "A childhood recollection of Durga Puja fairs, and the harder question of who could actually be there.",
    image: images.villageFair,
    imageCaption:
      "Illustrative image, not fieldwork photography: a fair of the kind described in the interview. No person, place or date is identified.",
    readingMinutes: 5,
    opening: [
      "Dr. Mahfuza Hilali described to the researcher about her childhood in Shahjadpur, the celebration of Durga Puja, the events by the river, and various cultural events that all communities of people of different religious backgrounds were participating in. These were routine aspects of her childhood, not special exercises in difference overcoming, in her account.",
      "This is a point to ponder. Not everyone constructs relationships in a formal way, that is, through discussion of tolerance. They meet sometimes when there is some sort of celebration nearby. They know neighbours, spend time in a similar place and know about an event that has different significance for different people.",
      "Dr. Hilali's recollections remind us of what cultural life could be like which makes those encounters possible. They also leave us with a tougher one: When you are in the same room as someone else, how do you know they're really there?",
    ],
    sections: [
      {
        heading: "Being together and welcomed",
        paragraphs: [
          "There are differences between plurality and pluralism, says Kaviraj. The presence of several religious groups is referred to as plurality and it is acceptance of the right of others to live differently that is pluralism.",
          "A fair makes this difference clear. Other people are present – a diverse crowd tells us this. It doesn't necessarily imply that they feel respected, that they can fit in comfortably, or that they would be welcome outside the celebration. The questions that come to mind have to do with the quality of the relationship.",
          "Dr. Hilali recalls goodwill transcending the community divide. This is useful evidence of her experiences of those moments. It implies that an encounter did not have to be dominated by religious difference. A neighbor's joy might be celebrated without sharing all of his or her dogmas.",
          "A historical approach, as outlined in the bibliography, is useful for Ahmed. He sees Bengali Muslim identity as one that has been formed in the process of language, land, institutions and relations. This view sees local cultural ties as being a component of the history of identity. They do not necessarily mean that an identity is being undermined.",
        ],
      },
      {
        heading: "The ones that do not live within the memory",
        paragraphs: [
          "The ones not living in the memory. A warm memory can be the beginning, but not the whole story, of a community. No Hindu organizer is heard here, no woman who could not attend, nor anyone who did not attend. The memories may be confirmed, complicated, or provide a new perspective on the same event experienced by Dr. Hilali.",
          "The questions Orton asks concerning interfaith engagement are useful, in part because they focus on who is not engaged and how power influences that. When applied to a fair, they're just like regular important questions. Who is eligible for travel? Who needs permission? Who's in charge of it and what matters to them?",
          "These are questions that need to be examined, and not statements regarding the specific meetings Dr. Hilali mentions. They help the project avoid the illusion of equity for all in a common space. A celebratory event can make the bridge over religious lines, and other barriers stay.",
        ],
      },
      {
        heading: "Remembering change carefully",
        paragraphs: [
          "Dr. Hilali was deeply concerned that the inclusive cultural life that he remembers is in decline. Her concern is important because it is a reflection of what she feels is at stake: common opportunities to connect with others who have different cultures.",
          "A single retrospective account cannot provide a picture of the evolution of participation in festivals over the decades in Bangladesh. It can't either confirm that the past relationships were always harmonious. Memories focus on significant experiences, but a wider study would require more memories from other generations and communities.",
          "For this project, the most salient lesson is, therefore, what to search for. But if a fair is a social and cultural space, its significance is in part that it is a space where people can form relationships. It wouldn't tell a complete story to retain its name or its annual date. We would also have to question if people are free to attend and feel welcome at the same time.",
        ],
      },
    ],
  },
  {
    slug: "baul-songs-shrines-and-the-people-behind-them",
    order: 2,
    title: "Baul Songs Shrines and the People Behind Them",
    preview:
      "Humanism, devotion, and why a tradition's meaning cannot be separated from the freedom to practise it.",
    image: images.shrineMusicGathering,
    imageCaption:
      "Illustrative image, not fieldwork photography: an evening song gathering in a shrine courtyard. No religious identity is implied for anyone depicted.",
    readingMinutes: 5,
    opening: [
      "Despite the lives behind them being unknown, a song can be widely admired. Listeners might hear a tune, but not be aware of how the performers view faith, belonging, or singing songs. This difference is significant when a tradition turns into a symbol of the culture shared by all.",
      "Dr. Hilali situated Lalon and Baul thought in the humanist perspective that prioritizes the human being in religious and social demarcations during the interview. These traditions are also more difficult to maintain in today's context due to fear and political pressure, she added (M. Hilali, personal communication, n.d.). Her account combines two issues: what a tradition teaches, and whether people feel free to practise it.",
    ],
    sections: [
      {
        heading: "To be able to hear the ideas in a song",
        paragraphs: [
          "Dr. Hilali's scholarly article (see bibliography) associates Baul philosophy to Dadathakur or Thakurda in Tagore's plays. In the annotation the focus is on human centred spirituality and the quest for the maner manush or person of the heart. It also points out the disparities between Tagore characters and the practice of the Bauls .",
          "This can account for the focus on human dignity in her interview account. It's not just about whether a song sounds welcoming or not. It is, is it the ideas surrounding it that help listeners see beyond the labels that are used to judge people?",
          "It would be a mistake to make that one a statement of tolerance automatically being brought about by music. The project has not investigated the reactions of listeners or the way listeners respond to others after listening. A better question to ask would be what the performer and the listener think the song asks of them.",
          "There is another difference to be aware of. The two sections of the interview and her published work are written by the same person. Although their relationship gives us insight into her view, it does not offer two independent accounts of the experience of the Baul traditions throughout Bangladesh.",
        ],
      },
      {
        heading: "A shrine is more than a heritage image",
        paragraphs: [
          "Another question linked to shrine culture is: how does devotion overlap with culture? Harder's research on the Maijbhandaris of Chittagong described in the bibliography investigates religious discourses, practices, texts and devotional songs in the Bengali tradition in a specific movement of life.",
          "In this case religion and culture cannot be divorced without great difficulty. Artistically significant and religiously meaningful can be the same thing in a song. A shrine may be called cultural heritage but should still allow for the devotion which makes it significant to its followers.",
          "It is not advisable to equate the baul practice with maijbhandari devotion. They are included together here because each is helpful for discussion of the relationship between faith and cultural expression. To comprehend either, one must pay attention to the participants and the setting of each. One study of one movement can't be considered as a representative study in all the shrines of Bangladesh.",
        ],
      },
      {
        heading: "The word syncretism helps us to see what?",
        paragraphs: [
          "In this project, the term syncretism will be defined as the interaction of religious and cultural influences. According to Roy, he has treated locally shaped Bengali Islam as a tradition deserving of being understood from the context of the environment.",
          "It is helpful if it serves to highlight those interactions. It loses its usefulness when it insists that each tradition must have been a whole entity, perfectly separate and uniform. It should not also be used as a term that can be used against practitioners who express their beliefs in other ways.",
          "The question to be explored in the research is thus not how well people practise within a category but how they understand what they practise. The particular explanation of a devotee may differ from the scholar, and so it should be listened to.",
        ],
      },
      {
        heading: "Ensuring that people are kept in the loop",
        paragraphs: [
          "Dr. Hilali's focus on fear is directed at the context of cultural engagement. Her interview does not gauge the extent of this concern or the number of incidents, it simply records this concern. Interviews with performers and devotees would help to define the challenges and what help is deemed useful.",
          "A piece of a tradition can be captured on a recording or photograph. A more complete description would also inquire who teaches it, who has the opportunity to practise it and who gets to explain what it means to the public. Those people would make cultural preservation more responsive to the lives it is meant to support if they were listened to.",
        ],
      },
    ],
  },
  {
    slug: "who-decides-what-counts-as-our-culture",
    order: 3,
    title: "Who Decides What Counts as Our Culture",
    preview:
      "From a personal account of Bengali and Muslim identity to the authority that decides what belonging requires.",
    image: images.stagedFolkPerformance,
    imageCaption:
      "Illustrative image, not fieldwork photography: folk music presented on a public stage. No religious identity, place or political role is attributed to anyone depicted.",
    readingMinutes: 5,
    opening: [
      "The importance of identifying with authority and disagreeing.Why it's so important to identify with authority and disagree.",
      "Dr. Hilali stated that Bengali cultural identity is the key aspect of her identity, but not an opposition to her faith, and she's able to coexist and live in harmony. During the interview she said that people could pray and fast while at the same time being attached to Bengali clothes, songs, etc.",
      "This is her story of how those aspects of life interrelate. Nor does it say who else is to know their identity first. Its significance is that it makes it visible: cultural belonging and religious commitments do not need to be in conflict.",
      "So why does a song, a festival or a piece of clothing turn into a discussion of whether or not a person belongs?",
    ],
    sections: [
      {
        heading: "When a practice becomes a test",
        paragraphs: [
          "A disagreement with regard to a cultural act may stay a personal affair. There might be a point where someone feels that going to an event doesn't align with their beliefs. The outcomes vary when that choice becomes an expectation placed on others.",
          "This distinction is important when it comes to this project. No one has to like the same festivals or agree on the meanings of their religious festivals for them to coexist. It does call for sensitivity to other people's attitudes towards differing choices. Refusing and blocking someone from attending are two different things.",
          "Through a historical lens, Ahmed's approach to identity debates helps to contextualize them.The Bengali Muslim identity was not created by a fixed and unchanging relationship between religion and local culture, but through the shifting social and regional relationship. Such contemporary conflicts should thus be explored not explained as an inevitable battle between two identities.",
        ],
      },
      {
        heading: "Dr. Hilali explains the pressure",
        paragraphs: [
          "During the interview, Dr. Hilali emphasized political motives in her analysis of religious polarization. She saw the manipulation of the communal identity as a large source of cultural pressure. That is a valid interpretation to consider. It is also more general than the facts on record here can prove. No single interview will reveal the reasons for all conflicts or prove that there are no conflicts between ordinary people. Political, personal and social factors can influence each other. Berger also has another perspective to ask the question. When encountering multiple beliefs, it can cause disruptions in one's initial sense of certainty, and motivate attempts to regain certainty . This by itself would not account for any particular controversy in Bangladesh. It asks \"Why does an interpretation gain conviction and what does it feel safe to?",
        ],
      },
      {
        heading: "Power other than personal authority",
        paragraphs: [
          "Huq's work explores the role of institutions in determining the public and authoritative versions of Islam. This helps to focus away from what a particular person thinks to how certain ideas have greater influence. Dr. Hilali's reflections on the constitutional values likewise link the two concepts of coexistence and equal citizenship. The worry is recognition, that is, whether the difference of religion alters one's position in a common society. Casanova's differences between the secular, secularization, and secularism hold the discussion to a manageable length. In that the idea of these are as concepts of categories, social processes and political organizations. A constitutional ideal, a cultural habit and an individual experience of acceptance are linked, but they are not the same sort of evidence. This project explores that relationship but does not view the interview as a source of the language of law.",
        ],
      },
      {
        heading: "Listening to another perspective",
        paragraphs: [
          "To lump together religious scholars would diminish the analysis. Zaman's work focuses on debate and alternate points of view in Islamic scholarly traditions. The inclusion of those who question specific folk practices would thus be part of a more comprehensive study. It would ask them what concerns they have, whose they believe and how they interpret freedom for another to take part. They may be able to provide answers which contradict the assumptions that form the basis of the project.",
          "So far, there is one way that Dr. Hilali has found to keep cultural and religious identities together, which is through his account. Whether society can accommodate others to articulate the same relationship in a different way without requiring a commitment of agreement.",
        ],
      },
    ],
  },
  {
    slug: "how-do-we-pass-a-living-culture-on",
    order: 4,
    title: "How Do We Pass a Living Culture On",
    preview:
      "Language, generational change, and practical ways to make cultural preservation more participatory.",
    image: images.passingOnTheSong,
    imageCaption:
      "Illustrative image, not fieldwork photography: an older musician teaching younger learners. No person, place or date is identified.",
    readingMinutes: 5,
    opening: [
      "At the end of the interview, the interview topic was shifted to normal speech. Dr. Hilali pointed out that the presence of English in Bangla was worrying issue and some modifications in the language meant a loss of the cultural bond.",
      "Her concern renders the project in a place where neither stage nor festival grounds are required: an ordinary conversation. Language can evoke memories and relationships, thus a change in the familiar expressions can be personal. But the significance of the change can't be determined by merely spotting a borrowed word.",
      "How can people share their values, while giving the next generation the freedom to choose?",
    ],
    sections: [
      {
        heading: "Does every change kill you?Is all change a loss to you?",
        paragraphs: [
          "Dr. Hilali linked foreign media and other cultural influences to the erosion of local practices). This is a clue as to how she interprets what she sees changing. It does not imply that all those who use mixed languages consider themselves less attached to Bangla.",
          "A younger speaker may describe the same habit in the context of school, work, humour or friendship. These are speculations to be explored, not facts substantiated in this study. It would be useful to hear from younger people what they value, since that is missing from the discussion.",
          "Then there's a good sort of conflict between outside and in and the various readings of the project. In the bibliography, Ahmed and Roy discuss identities and traditions that have been created in response to their social environment). However, if interaction is part of their past then change alone is not sufficient evidence of the lack of cultural meaning.",
          "Not all change is safe. It involves questioning the changes, for whom, and the implications of those changes. If a song is presented in a new way, and there's no more opportunities to learn it, then the responses would be different.",
        ],
      },
      {
        heading: "Worrying about decline to supporting learning",
        paragraphs: [
          "The first step to a practical approach is access. Is there someone who wants the tradition who can find a teacher, learn the language and spend time with people who practise the tradition? What makes it possible for people to participate and what is getting in their way?",
          "The present study may not provide answers for those questions in all Bangladesh. It does indicate that preservation must go beyond the collection of “lovely” examples of heritage. Whilst it may be helpful to have a recording, it does not replace the relationships in which a practice is learned.",
          "One possibility would be a short series of narratives on a single local shrine, song tradition, or fair. Everyone would be able to describe what the practice means to them, how they are introduced to it, and what they would like people to understand. Such a collection would be a new project and not something that has been done at this site.",
          "Contributors should have the freedom to determine whether or not their name or recording will be published. An account may be more accessible to English speakers with a checked translation, but still be available to Bangla speakers in their original language. A clear credit for the contributions of the actors and narrator should be given.",
        ],
      },
      {
        heading: "Allowing for distinctions between the accounts",
        paragraphs: [
          "The issues of participation and representation, as addressed in Orton, provide a helpful framework for this suggested project. A collection would be more robust if it would also contain the voices of those whose voices are not heard, such as the voices of women, minority participants or those who do not attend a public event.",
          "It should also be possible for those who are younger to write about attachments that are not quite the same as those of an older generation. It could start with an online recording, a new song that has just been learned, or a family memory. Whether these experiences became ongoing participation might be questioned more than assumed.",
          "Open questions in the interviews would be helpful. The question of what has changed opens up space for change, for losses, for mixed emotions. Questions about the disappearance of culture already help direct the discussion to one answer. There are some questions in the project guide that tend to the perspective of decline, which was a limitation that ought to be explored in future research.",
        ],
      },
      {
        heading: "A people culture in which people can participate",
        paragraphs: [
          "The series opened with the memory of Dr. Hilali together with us celebrating. The book concludes with a question on the circumstances that facilitate such experiences. They must have opportunities to learn, to state their beliefs, and to decide on their involvement.",
          "Not all accounts need to have the same view on passing on a living culture. It must have space for them to share their own history and curiosity to hear history that complicates a familiar one.",
        ],
      },
    ],
  },
];

export const approach = {
  heading: "Research Approach",
  sections: [
    {
      heading: "The question that lies underneath the project",
      paragraphs: [
        "In this project, it is asked: What is the relationship between the shared folk and religious practices and cultural belonging and living together in Bangladesh, and how does changing expectations impact in the participation? It is concerned with everyday cultural life, festivals, music, shrine traditions, identity and language.",
        "Folk healing and local beliefs are integrated in the broader concept of the proposal. These issues are not elaborated as findings within the article series, as the summary of the interviews is not very informative about these issues.",
      ],
    },
    {
      heading: "One interview and some scholarly views",
      paragraphs: [
        "It focuses on the main research which is an interview of Dr. Mahfuza Hilali. The proposal features her under the designation of Associate Professor (bangla language and literature) at BRAC University, she is also a researcher, writer, playwright, theatre artist. Her background provides her with a relevant perspective on the connection between cultural expression and social life.",
        "The proposal outlines an open-ended (semi-structured) interview. It starts with the memories and familiar cultural practices and then goes to identity, authority, social change and the younger generation. The duration and the schedule planned refer to what will be done during the research process, not to what has been done during the interview process.",
        "The interview summary is used as a basis of the conversation in the website analysis. The summary is not a word-for-word transcript but includes views and recollections. The articles thus paraphrase the positions being taken and refer to the numbered sections of the summary and not to reconstructed quotations.",
      ],
    },
    {
      heading: "How the themes were developed",
      paragraphs: [
        "The analysis is based on the repeated issues of shared participation, human dignity, cultural and religious identity, political and institutional power and tradition continuity.",
        "These concerns are outlined in a connected discussion in the four articles. Each starts with a question posed in the interview account, introduces a relevant scholarly idea, and reflects on the question and the idea, and how they help us understand. Where an argument goes beyond the evidence, it is presented as a question or proposal for further study.",
        "This work is an interpretation of a qualitative nature. Does not rely on percentages of surveys, attendance, or a formally developed coding scheme. The strength of the interview is that it probes and establishes links within one perspective, not in its representativeness of a population.",
      ],
    },
    {
      heading: "The use of the readings",
      paragraphs: [
        "The course readings offer ideas to consider throughout the process of thinking about pluralism, secularism, identity and authority. The external sources are more to the point of Baul philosophy, Maijbhandari devotion and historical development of Bengali Islamic traditions.",
        "The articles rely on scholarly arguments found in the annotated bibliography; the original authors of the argument are cited in APA (author-date) style. Every theory is used to ask a question, but no theory is considered as evidence for a specific explanation to be used for all cultural conflicts that may arise in Bangladesh.",
        "Dr. Hilali is the person interviewed and a writer of one external source. These are various ways of representing her thinking, and not separate accounts from various thinkers.",
      ],
    },
    {
      heading: "The project cannot guarantee what may occur once it is finished",
      paragraphs: [
        "An interview cannot demonstrate the extent of the belief or the speed of the change of practice. Earlier cultural experiences can have a meaning without being a full representation of earlier cultural life. Any comments regarding cultural decay or political motivations are not considered to be facts about the nation—only the participant's point of view.",
        "The summary also condenses the conversation, which can sometimes mean nuance or qualifications are lost, too. In some of the questions in the interview guide there is an invitation to agree with thoughts of decline or a time that was more harmonious. That framing might have been influential in the discussion and should be accounted for in interpreting the story.",
        "Interviews with practitioners, minority participants, younger people, organisers and individuals who are against specific practices would be helpful for the study. A fuller analysis would be aided by observation of cultural events and access to the original recording of the interview.",
      ],
    },
    {
      heading: "Research ethics",
      paragraphs: [
        "The proposal will include an explanation of the project, consent and permission to record. These pledges are significant because there are personal identity and culturally sensitive judgments involved in the discussion. When a student agrees to be interviewed for a course, consent does not apply to all types of public re-use.",
        "The writing separates the participant's interpretations from the project's analysis. It doesn't give community-wide beliefs or treat a disputed judgment as an incontrovertible truth. Later publication of recognizable recordings or direct quotations must be in accord with the participant's permission.",
      ],
    },
    {
      heading: "What the study contributes",
      paragraphs: [
        "The project enables to approach the concept of coexistence in a targeted manner by engaging in everyday cultural activities. It puts the importance of the common tradition on the relation network, access, recognition, and freely participation. These questions also are useful even if there is disagreement about the tradition itself.",
      ],
    },
  ],
} as const;

export const about = {
  heading: "About this project",
  sections: [
    {
      heading: "About the researcher",
      paragraphs: [
        "I am Shahriar Akram, a BRAC University student completing this CST308 individual project. My research focuses on how shared cultural practices can create connections across religious differences and why those practices sometimes become contested.",
        "In this website, I bring the interview material into conversation with the readings while keeping their limits visible. My aim is to make the discussion understandable without simplifying the people or beliefs involved.",
      ],
    },
    {
      heading: "About the interview participant",
      paragraphs: [
        "The project interview features Dr. Mahfuza Hilali, an Associate Professor of Bangla Language and Literature at BRAC University, as well as a researcher, writer, playwright, and theatre artist. Her reflections connect cultural memories with questions about literature, faith, identity, and language.",
        "Her contribution provides the central interview perspective for the project. It is presented as her account, with room for other participants and communities to understand these issues differently.",
      ],
    },
  ],
} as const;

export const reflection = {
  heading: "The Reflection Analysis",
  paragraphs: [
    "The analysis was on the possibility of religious coexistence without the loss of equality in access or authority, a possibility that is made possible by shared folk practices. In my annotated bibliography, I deconstructed the idea of fixed oppositions between Bengali and Muslim identities by creating a historical context. Ahmed (2001) places identity in the context of shifting social and regional relations, and Roy (2014) reads the local formation of Islam as a historical rather than a faulty version of an imported model. Kaviraj's (2021) fine distinction between plurality and pluralism was the one that made me ask myself this question: Does sharing a cultural space mean a shared acceptance of someone's right to participate in a different way?",
    "The interview was fraught with a narrative that made an exclusively positive reading of shared festivals. Dr. Mahfuza Hilali recalled her attendance at Durga Puja fairs, but also mentioned some restrictions that her aunts managed to get around. This implied that interreligious interaction could be coupled with exclusion of women. she says, “But these two are not conflicting. We have put them in a conflict.” Her mention of the Bengali and Muslim identities helped to relate personal experience with the conceptual aspects of the project. The study of devotional practice and the cultural expression by the Bengali community is complicated by Harder's (2011) discussion of Maijbhandari and Hilali's (2024) discussion of Baul humanism. However, a publication and an interview by Hilali cannot be considered as independent corroboration since they are from the same scholar's point of view.",
    "Care needed to be taken in understanding cultural change, as they were wary of giving too much weight to causal explanations. Religious uncertainty can be stimulated by exposure to alternatives, as opposed to secularization; Berger (2014) makes this distinction. This provided an alternative model of boundary making, not as evidence of a necessary link between high religiosity and intolerance. Huq (2013) draws attention to the institutional constructions of legitimate Islam and Casanova (2011) distinguishes between the secular, secularism, and the secularization. All of these readings facilitated the identification of political ideals and institutional authority from the lives of the people, which were lived on a daily basis. Cultural restrictions were found in Hilali's attributions of political interests but were not independently constructed explanations of national change.",
    "Zaman (2005) also questioned the dual aspect of inclusive folk culture and uniformly restrictive religious scholars by focusing on the debate aspect of Islamic traditions. The focus on participation and representation revealed by Orton (2016) in her focus on one academic interviewee highlighted a weakness in her selection of a single interviewee: her piece does not include a voice from practitioners, an outsider from a minority group, nor a voice that rejects a specific tradition. Additionally, there were some questions asked in the interview that seemed to look forward to the idea of cultural deterioration, which may have led to a favorable response. The text summary and the text transcript helped to pull out some of the additional information that could be confusing to the narrative, especially the restrictions in childhood memories. The English translation added a new level of interpretation, which means that it is helpful to compare with the original recording before relying on the words in the translation as a definitive translation. These restrictions enable the continuation of the research with contrasting accounts by participants, rather than generalize from one conversation.",
  ],
  takeawayHeading: "What readers can take away",
  takeaway:
    "A shared tradition is worth examining beyond its appearance as a symbol of unity. The more revealing questions concern the people around it: who participates, how they describe its meaning, and whether they can make different choices while remaining part of a shared community.",
} as const;

export const references: { text: string; link: string | null }[] = [
  {
    text: "Ahmed, R. (2001). Introduction: The emergence of the Bengal Muslims. In R. Ahmed (Ed.), Understanding the Bengal Muslims: Interpretative essays (pp. 1–25). Oxford University Press.",
    link: null,
  },
  {
    text: "Berger, P. L. (2014). The many altars of modernity: Toward a paradigm for religion in a pluralist age. De Gruyter.",
    link: "https://doi.org/10.1515/9781614516477",
  },
  {
    text: "Casanova, J. (2011). The secular, secularizations, secularisms. In C. Calhoun, M. Juergensmeyer, & J. VanAntwerpen (Eds.), Rethinking secularism (pp. 54–74). Oxford University Press.",
    link: null,
  },
  {
    text: "Harder, H. (2011). Sufism and saint veneration in contemporary Bangladesh: The Maijbhandaris of Chittagong. Routledge.",
    link: "https://doi.org/10.4324/9780203831809",
  },
  {
    text: "Hilali, M. (2024). Rabindranather ‘Thakurda’ o Bauldarshan [Rabindranath’s ‘Thakurda’ and Baul philosophy]. Bangladesh Asiatic Society Patrika, 42(2), 219–232.",
    link: "https://doi.org/10.64298/jasbbn.v42ii.004",
  },
  {
    text: "Huq, S. (2013). Defining self and other: Bangladesh’s secular aspirations and its writing of Islam. Economic and Political Weekly, 48(50), 51–61.",
    link: "https://www.jstor.org/stable/24479046",
  },
  {
    text: "Kaviraj, S. (2021). Plurality and pluralism: Democracy, religious difference, and political imagination. In K. Barkey, S. Kaviraj, & V. Naresh (Eds.), Negotiating democracy and religious pluralism: India, Pakistan, and Turkey (pp. 221–248). Oxford University Press.",
    link: "https://doi.org/10.1093/oso/9780197530016.003.0011",
  },
  {
    text: "Orton, A. (2016). Interfaith dialogue: Seven key questions for theory, policy and practice. Religion, State & Society, 44(4), 349–365.",
    link: "https://doi.org/10.1080/09637494.2016.1242886",
  },
  {
    text: "Roy, A. (2014). The Islamic syncretistic tradition in Bengal. Princeton University Press. (Original work published 1983)",
    link: "https://doi.org/10.1515/9781400856701",
  },
  {
    text: "Zaman, M. Q. (2005). Pluralism, democracy, and the ‘ulama. In R. W. Hefner (Ed.), Remaking Muslim politics: Pluralism, contestation, democratization (pp. 60–86). Princeton University Press.",
    link: "https://doi.org/10.1515/9781400826391.60",
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const getNeighbours = (slug: string) => {
  const i = articles.findIndex((a) => a.slug === slug);
  return {
    previous: i > 0 ? articles[i - 1]! : null,
    next: i < articles.length - 1 ? articles[i + 1]! : null,
  };
};
