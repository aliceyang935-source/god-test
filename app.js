const GROUPS = ["比劫", "食伤", "财", "官杀", "印"];
const TEST_VERSION = "visible-v1";
const COLLECTION_ENDPOINT = "";

const mainQuestions = [
  {
    id: 1,
    left: "比劫",
    right: "食伤",
    text: "在群聊、讨论或写东西时，我经常是先把话说出来，才突然意识到：对方和我根本不是一路人，这句话发出去也接不上。"
  },
  {
    id: 2,
    left: "比劫",
    right: "财",
    text: "面对一个人、一个机会或一段关系时，我常常会先判断自己是否接受它；一旦发现自己不能接受这种关系，我就会觉得我和会接受这种关系的人不是一种人。",
    harmful: { when: "positive", attacker: "比劫", victim: "财", points: 2 }
  },
  {
    id: 3,
    left: "比劫",
    right: "官杀",
    text: "当我表达一个立场、做出一个选择后，如果外界明显接受不了，我会很快意识到：我和给我这个反应的人并不是一类人。",
    harmful: { when: "positive", attacker: "官杀", victim: "比劫", points: 1 }
  },
  {
    id: 4,
    left: "比劫",
    right: "印",
    text: "当我想站在一个位置、表达一种身份或立场时，我需要先想清楚它为什么成立；只要理由站得住，我就会更确定自己属于这里。"
  },
  {
    id: 5,
    left: "食伤",
    right: "比劫",
    text: "当我在分析一件事、写文或和人讨论时，我经常会先分清：这个人到底属于哪种人。分清之后，后面的观点和结构才会自然展开。"
  },
  {
    id: 6,
    left: "食伤",
    right: "财",
    text: "面对一个人、一个素材、一个机会或一个选题时，我会先想它可以怎么用、能和什么搭配、能发展成什么关系；一旦用途确定，我的想法就会变多。"
  },
  {
    id: 7,
    left: "食伤",
    right: "官杀",
    text: "当别人对我的观点有反应，不管是质疑、误解还是反对，我反而会更想继续分析下去，把这件事说得更清楚。",
    harmful: { when: "positive", attacker: "食伤", victim: "官杀", points: 2 }
  },
  {
    id: 8,
    left: "食伤",
    right: "印",
    text: "上课、看书或听人解释一个理论时，我很容易顺着这个过程延伸出更多观点、定义，甚至一些完全跳出去的想象。",
    harmful: { when: "positive", attacker: "印", victim: "食伤", points: 1 }
  },
  {
    id: 9,
    left: "财",
    right: "比劫",
    text: "当我处理一群人、一个项目或一段关系时，我会先判断谁和谁是一组，谁不能放在一起；分清之后，我才知道怎么开始安排任务。",
    harmful: { when: "positive", attacker: "比劫", victim: "财", points: 1 }
  },
  {
    id: 10,
    left: "财",
    right: "食伤",
    text: "面对一个人、一个素材、一个机会或一个选题时，我会先试着想出很多种用法和发展方向；试过之后，我才知道哪些是真的有用的，值得保留。"
  },
  {
    id: 11,
    left: "财",
    right: "官杀",
    text: "当我想推进一个人、一个项目或一段关系时，我会很在意外界的反应；根据外界的不同反馈，我会重新调整它的位置、说法或推进方式。"
  },
  {
    id: 12,
    left: "财",
    right: "印",
    text: "面对一个人、一个机会或一段关系时，我会先想清楚它为什么成立、靠什么维持；如果这个理由不够充分，我就很难真的把它纳入我的安排里。",
    harmful: { when: "positive", attacker: "财", victim: "印", points: 2 }
  },
  {
    id: 13,
    left: "官杀",
    right: "比劫",
    text: "当别人评价、质疑或支持我时，我会先判断：他们把我当成了哪一类人？我会很在意对方到底怎么判定我的身份归属。",
    harmful: { when: "positive", attacker: "官杀", victim: "比劫", points: 2 }
  },
  {
    id: 14,
    left: "官杀",
    right: "食伤",
    text: "当我不确定别人能不能接受一个观点时，我会先说一点、试探一下，看他们怎么反应，再决定还能不能继续往下说。",
    harmful: { when: "positive", attacker: "食伤", victim: "官杀", points: 1 }
  },
  {
    id: 15,
    left: "官杀",
    right: "财",
    text: "当外界开始有压力、质疑或限制时，我会先调整我手上的人、资源或关系：哪些还能继续推进，哪些需要换一种安排，哪些暂时不能再碰。"
  },
  {
    id: 16,
    left: "官杀",
    right: "印",
    text: "当别人对一件事有明显反应时，我会先想：他们为什么会这样反应？这里到底是哪条规则、理由或前提在起作用？"
  },
  {
    id: 17,
    left: "印",
    right: "比劫",
    text: "当我判断一个观点、玩笑或做法能不能成立时，我会先看说话者的 self id 是什么、站在什么位置；同一句话由不同身份的人说出来，我会得出完全不同的判断。"
  },
  {
    id: 18,
    left: "印",
    right: "食伤",
    text: "当我判断一件事是不是真的成立时，我不会只看一个说法，而是会拿很多案例去测试它；如果放到不同案例里都说得通，我才会更相信这个判断成立。",
    harmful: { when: "positive", attacker: "印", victim: "食伤", points: 2 }
  },
  {
    id: 19,
    left: "印",
    right: "财",
    text: "当我判断一个理论能不能成立时，我会看它能不能落到具体的人、关系、资源或安排上；如果它不能和具体对象形成关系，我就会觉得它只是空话。",
    harmful: { when: "positive", attacker: "财", victim: "印", points: 1 }
  },
  {
    id: 20,
    left: "印",
    right: "官杀",
    text: "当我判断一个理论能不能成立时，我会看外界真实的反应：他们到底接受什么、不接受什么。外界反应会帮我验证这个推理过程是否真实。"
  }
];

const pairQuestions = [
  {
    id: 1,
    left: "比劫",
    right: "食伤",
    text: "当我发现一个观点还能继续展开，但继续说下去可能会模糊我的立场时，我会更倾向于先停下来，确认自己到底站在哪边，再继续观点讨论。"
  },
  {
    id: 2,
    left: "比劫",
    right: "财",
    text: "当一个人、机会或关系对我来说很有价值，但接受它会让我觉得自己变成了另一类人时，我会更倾向于先确认“我是不是这种人”，而不是先抓住机会。",
    harmful: { when: "negative", attacker: "比劫", victim: "财" }
  },
  {
    id: 3,
    left: "比劫",
    right: "官杀",
    text: "当我的立场和外界反应发生冲突时，我会更倾向于坚持我的立场，而不是别人会因此作出什么反应。",
    harmful: { when: "positive", attacker: "官杀", victim: "比劫" }
  },
  {
    id: 4,
    left: "比劫",
    right: "印",
    text: "当我已经很清楚自己站在哪边时，即使暂时说不出完整理由，我也会先保留这个立场，而不是等到所有理由都证明清楚再站出来。"
  },
  {
    id: 5,
    left: "食伤",
    right: "财",
    text: "当一个素材、机会或选题还能激发我很多想法，但暂时看不出实际用途时，我会更倾向于继续展开它，而不是先判断它到底有没有用。"
  },
  {
    id: 6,
    left: "食伤",
    right: "官杀",
    text: "当我很想把一个观点继续说清楚，但发现别人可能已经接受不了了，我会更倾向于继续把它讲完整，而不是先停下来照顾外界反应。",
    harmful: { when: "negative", attacker: "食伤", victim: "官杀" }
  },
  {
    id: 7,
    left: "食伤",
    right: "印",
    text: "当一个推理过程激发我很多联想，但这些联想已经开始跳出原本论证时，我会更倾向于继续追着想法跑，而不是先回到推理本身是否成立。",
    harmful: { when: "positive", attacker: "印", victim: "食伤" }
  },
  {
    id: 8,
    left: "财",
    right: "官杀",
    text: "当我很想保留一个人、项目或关系，但外界反馈提示它可能不太被接受时，我会更倾向于先想怎么继续安排它，而不是立刻按照外界反应调整或放下。"
  },
  {
    id: 9,
    left: "财",
    right: "印",
    text: "当一个人、机会或关系对我很有价值，但它的理由还不够充分、还没完全说得通时，我会更倾向于先把它纳入安排，而不是等到理由完全成立。",
    harmful: { when: "negative", attacker: "财", victim: "印" }
  },
  {
    id: 10,
    left: "官杀",
    right: "印",
    text: "当一个推理过程在逻辑上说得通，但外界真实反应和它不一致时，我会更倾向于先相信外界反应，重新判断现实能接受什么，而不是继续守着原本的推理。"
  }
];

const splitQuestions = {
  比劫: {
    group: "比劫",
    leftName: "比肩",
    rightName: "劫财",
    text: "当我进入一个群体、讨论场或关系圈时，我判断自己属于哪里，通常更依赖于：先看谁和我绝对不是一路人，还是先看谁可以和我站在一起。",
    leftDescription: "先排除不能并立的人。",
    rightDescription: "先确认可以站在一起的人。"
  },
  食伤: {
    group: "食伤",
    leftName: "食神",
    rightName: "伤官",
    text: "当我展开一个故事、观点或分析时，我更常从“不对劲的地方”一路推到事实浮现，还是先抓住一个已经成立的点，再继续推出定义和结构。",
    leftDescription: "从异常推到事实。",
    rightDescription: "从成立点推到定义。"
  },
  财: {
    group: "财",
    leftName: "正财",
    rightName: "偏财",
    text: "面对一个人、机会或关系时，我更在意找到一种稳定成立、可以维护和升级的关系，还是先扩大尝试范围，排除不合适的，再保留可以灵活轮换的选项。",
    leftDescription: "稳定成立、维护升级。",
    rightDescription: "扩大尝试、排除筛选、灵活轮换。"
  },
  官杀: {
    group: "官杀",
    leftName: "正官",
    rightName: "七杀",
    text: "面对外界反应时，我更倾向于根据他们已经能接受的部分，横向扩展同类做法；还是先判断他们不能接受什么，再继续试探剩下空间还能推进到哪里。",
    leftDescription: "从“外界能接受什么”横向扩展。",
    rightDescription: "从“外界不能接受什么”反推还能试什么。"
  },
  印: {
    group: "印",
    leftName: "正印",
    rightName: "偏印",
    text: "当我判断一件事是否成立时，我更习惯从已经成立的条件一步步顺推，还是枚举很多可能条件，排除不成立项，最后剩下成立的那个。",
    leftDescription: "从 A 成立顺推出 B 成立。",
    rightDescription: "枚举、测试、排除，剩下成立项。"
  }
};

const groupExplanations = {
  比劫: {
    summary: "比劫是主体位置和站位动作。",
    useful: "作为用神组时，它更像一个可以先确认位置、再展开行动的稳定支点。",
    harmful: "作为忌神组时，它容易先把关系切成同类和异类，再压住对象、机会或外界反馈。"
  },
  食伤: {
    summary: "食伤是感受、摄入、判断和表达冲动。",
    useful: "作为用神组时，它更像真实感受进入输出通道，能把想法讲开、讲细、讲活。",
    harmful: "作为忌神组时，它容易为了继续表达而顶住边界，甚至把外界反馈当成继续推进的燃料。"
  },
  财: {
    summary: "财是对象进入分配、排序、支配和关系安排的场。",
    useful: "作为用神组时，它更像把人、素材、机会纳入可操作关系的能力。",
    harmful: "作为忌神组时，它容易为了保留或安排对象，先压过理由、边界和别的通道。"
  },
  官杀: {
    summary: "官杀是边界、角色切换、执行约束和外界反应。",
    useful: "作为用神组时，它更像及时识别现实边界，帮行动落在可被接受的范围里。",
    harmful: "作为忌神组时，它容易被外界反应牵动，先关停主体位置或表达空间。"
  },
  印: {
    summary: "印是解释合法性系统和叙事授权。",
    useful: "作为用神组时，它更像给感受和表达一个名称、来源、顺序和可成立的框架。",
    harmful: "作为忌神组时，它容易先夺走主体位置，用解释框架提前裁判表达。"
  }
};

const godExplanations = {
  比肩: "比肩偏向先排除不能并立的人，靠边界感确定自己站在哪里。",
  劫财: "劫财偏向先确认可以站在一起的人，靠同盟感形成位置。",
  食神: "食神偏向从异常处追到事实浮现，让真实材料自己冒出来。",
  伤官: "伤官偏向从已经成立的点继续推出定义、结构和表达锋面。",
  正财: "正财偏向稳定成立、维护升级，让关系持续可经营。",
  偏财: "偏财偏向扩大尝试、排除筛选、灵活轮换，把对象快速纳入操作场。",
  正官: "正官偏向从外界已经能接受的部分横向扩展，保持可执行秩序。",
  七杀: "七杀偏向先判断外界不能接受什么，再反推剩余空间。",
  正印: "正印偏向从已成立条件一步步顺推，依赖通用和稳定的解释链。",
  偏印: "偏印偏向枚举、测试、排除，最后留下能用的那个解释工具。"
};

const resultVerdicts = {
  比肩: {
    useful: {
      title: "亲爱的朋友",
      body: "或许有人曾经质疑你割舍得太决绝，可你早已想清楚：你和 TA 并非一类人。离开不是无情，而是终于承认那段关系无法并立。你割舍旧的位置，走向新的身份认同。"
    },
    harmful: {
      title: "离开之后，你后悔吗？",
      body: "那一刻，“道不同不相为谋”是真的。可话说得太难听，路断得太彻底，后来想回到曾经的朋友身边，也发现一切都回不去了。争吵结束后，房间安静下来，未来被一起切断，只剩下朋友的泪水。"
    }
  },
  劫财: {
    useful: {
      title: "亲爱的同路人",
      body: "或许有人说你太容易把人当自己人，可你知道，朋友是你不可或缺的力量来源。你在人群中认出可以一起走的人，把散落的勇气重新接成队伍。不是谁都能同行，但当你找到同类，你终于安心休憩。"
    },
    harmful: {
      title: "你还要替谁冲锋？",
      body: "那一刻，“我们是一边的”是真的。可你冲得太快，卷得太深，甚至把别人的战场也当成自己的命运。后来才发现，有些人只是短暂同路，不值得你押上全部。人群散去之后，留下的或许有胜利，但也是一场无措的寂寞。"
    }
  },
  食神: {
    useful: {
      title: "亲爱的侦探",
      body: "或许有人说你太敏感，总能注意到那些别人一笑而过的不对劲。可你知道，真相常常不是突然降临的，而是从一个微小的异常开始，慢慢长出轮廓。你不急着下结论，只是顺着那一点违和继续走，直到被遮住的事实终于浮现。"
    },
    harmful: {
      title: "你还要想多久？",
      body: "一开始，只是有哪里不对劲。后来每一个细节都像线索，每一种可能都值得预演，每一句没说出口的话都在脑子里反复重播。你不是没有答案，而是太习惯继续展开。直到陷入无穷的思索，落入虚无的陷阱。"
    }
  },
  伤官: {
    useful: {
      title: "亲爱的命名者",
      body: "或许有人说你太锋利，总能把暧昧的东西说得太清楚。可你知道，有些事实一旦成立，就不能再被含糊带过。你抓住那个真正说得通的点，把混乱重新命名，让模糊的世界显出边界、结构和定义。"
    },
    harmful: {
      title: "你一定要说到底吗？",
      body: "一开始，只是有一个地方真的成立。后来每一句话都要被定义，每一个漏洞都要被指出，每一种含糊都变得无法忍受。你不是没有看见边界，而是太想接近真理。直到所有人都安静下来，真理还站在那里，也只剩下你还和真理站在一起。"
    }
  },
  正财: {
    useful: {
      title: "亲爱的守护者",
      body: "或许有人说你太认真，总想把一段关系、一件事情、一个选择安放到稳定的位置。可你知道，真正值得的东西不是只被短暂拥有，而是需要被维护、被承担、被一点点升级。你把珍贵的人与事留在生活里，让它们不再漂浮，而是终于有了可以长久停靠的地方。"
    },
    harmful: {
      title: "为什么不能回到从前？",
      body: "一开始，只是想把值得的东西好好留下。后来每一次降级都像背叛，每一点变化都像失去，每一种不如从前都变得难以忍受。你不是不懂现实会变，只是太记得它曾经可以更好。关系还在那里，可它已经不再是你心里那个完整的样子。"
    }
  },
  偏财: {
    useful: {
      title: "亲爱的猎人",
      body: "或许有人说你太会筛选，太快判断什么能要、什么不能要。可你知道，世界本来就有很多可能，不是每一种都值得留下。你先走进更大的范围，再排除不合适的东西，最后把真正可用、可爱、可流动的对象带回身边。"
    },
    harmful: {
      title: "你还在寻找下一个吗？",
      body: "一开始，只是想试试看还有没有更好的选择。后来每一个对象都可以被比较，每一段关系都可以被替换，每一种可能都像通往下一处的入口。你不是没有珍惜过，只是太习惯继续筛选。选项越来越多，真正停下来的地方却越来越少。"
    }
  },
  正官: {
    useful: {
      title: "亲爱的通行者",
      body: "或许有人说你太在意规则，太关心别人能不能接受。可你知道，真正的自由不是横冲直撞，而是找到一条可以反复通行的路。你从别人的微笑与皱眉出发，得到许许多多的认可与信任。"
    },
    harmful: {
      title: "你被允许了吗？",
      body: "一开始，只是想确认什么能被接受。后来每一个选择都要等待许可，每一个动作都要符合期待，每一种偏离都像即将出错。你不是没有自己的方向，只是太习惯站在外界允许的范围里。路看起来很稳，走到最后，却像替别人活完了一生。"
    }
  },
  七杀: {
    useful: {
      title: "亲爱的破局者",
      body: "或许有人说你太莽撞，总是靠近危险的边界。可你知道，有些事情如果没有人做，谁也不知道红线到底的在哪里，你从外界不能接受的反应里识别红线，把真正不可越过的地方留下，再寻找下一条红线的痕迹。"
    },
    harmful: {
      title: "你还要撞到哪里？",
      body: "一开始，只是想知道边界在哪里。后来每一次反应都像新的挑战，每一道红线都像还可以再试一次，每一个不能接受都变成继续推进的理由。你不是没有感觉到危险，只是太习惯在高压里确认自己还活着。世界终于被你撞开，可你也站在了没有退路的边缘。"
    }
  },
  正印: {
    useful: {
      title: "亲爱的证明者",
      body: "或许有人说你太需要理由，总要等一切说得通才安心。可你知道，真正稳固的判断不是凭空落下的，而是从已经成立的条件里一步步长出来。你顺着可靠的前提出发，让混乱慢慢有了秩序，也让自己终于可以相信：这件事确实成立。"
    },
    harmful: {
      title: "你还要证明多久？",
      body: "一开始，只是想让判断更稳。后来每一个念头都要找到来源，每一次行动都要等理由完整，每一种冲动都被送进漫长的审查。你不是没有方向，只是太习惯先证明自己可以开始。生活像一场永远没做完证明题，举步难行。"
    }
  },
  偏印: {
    useful: {
      title: "亲爱的解谜者",
      body: "或许有人说你太会多疑，总是不肯直接相信第一条路。可你知道，真正成立的东西，经得起一次次测试。你枚举可能，排除错误，把不成立的选项一层层剥开。最后剩下的那个，不是侥幸，而是被你亲手找出来的真相。"
    },
    harmful: {
      title: "还有哪里不对？",
      body: "一开始，只是想排除错误。后来每一个条件都像陷阱，每一种可能都需要测试，每一个答案都还可以再怀疑一次。你不是找不到真相，只是太习惯继续排除。世界变成一间没有出口的实验室，你真的能找到绝对的答案吗？"
    }
  }
};

const state = {
  page: "intro",
  mainIndex: 0,
  pairIndex: 0,
  splitIndex: 0,
  answers: {},
  pairIds: [],
  splitGroups: [],
  statsChoice: null,
  displayName: "",
  collectionUserId: "",
  birthDate: "",
  birthHour: "",
  collectionStatus: "",
  collectionSubmitted: false,
  copyStatus: "",
  manualCopyText: "",
  joinedStats: false
};

const root = document.getElementById("app");

function scoreKey(kind, id) {
  return `${kind}-${id}`;
}

function splitKey(kind, group) {
  return `split-${kind}-${group}`;
}

function getAnswer(key) {
  return Number.isFinite(state.answers[key]) ? state.answers[key] : 0;
}

function setAnswer(key, value) {
  state.answers[key] = Number(value);
}

function emptyScores() {
  return GROUPS.reduce((scores, group) => {
    scores[group] = 0;
    return scores;
  }, {});
}

function calculateScores(includePairs = true) {
  const normal = emptyScores();
  const harmful = emptyScores();

  mainQuestions.forEach((question) => {
    const s = getAnswer(scoreKey("main", question.id));
    normal[question.left] += 2 * s;
    normal[question.right] += s;

    if (question.harmful && s > 0) {
      const points = question.harmful.points * s;
      harmful[question.harmful.attacker] += points;
      harmful[question.harmful.victim] -= points;
    }
  });

  if (includePairs) {
    getSelectedPairQuestions().forEach((question) => {
      const s = getAnswer(scoreKey("pair", question.id));
      normal[question.left] += -2 * s;
      normal[question.right] += 2 * s;

      if (!question.harmful) return;
      if (question.harmful.when === "negative" && s < 0) {
        const points = -2 * s;
        harmful[question.harmful.attacker] += points;
      }
      if (question.harmful.when === "positive" && s > 0) {
        const points = 2 * s;
        harmful[question.harmful.attacker] += points;
      }
    });
  }

  const composite = emptyScores();
  GROUPS.forEach((group) => {
    composite[group] = normal[group] + harmful[group];
  });

  return { normal, harmful, composite };
}

function sortGroupsByScore(scoreMap, tieBreaker = GROUPS) {
  return [...GROUPS].sort((a, b) => {
    const diff = scoreMap[b] - scoreMap[a];
    if (diff !== 0) return diff;
    return tieBreaker.indexOf(a) - tieBreaker.indexOf(b);
  });
}

function selectTopGroupsFromMain() {
  return sortGroupsByScore(calculateScores(false).normal).slice(0, 3);
}

function samePair(question, a, b) {
  return (
    (question.left === a && question.right === b) ||
    (question.left === b && question.right === a)
  );
}

function buildPairIds() {
  const top = selectTopGroupsFromMain();
  const combos = [
    [top[0], top[1]],
    [top[0], top[2]],
    [top[1], top[2]]
  ];
  return combos
    .map(([a, b]) => pairQuestions.find((question) => samePair(question, a, b)))
    .filter(Boolean)
    .map((question) => question.id);
}

function getSelectedPairQuestions() {
  const ids = state.pairIds.length ? state.pairIds : buildPairIds();
  return ids.map((id) => pairQuestions.find((question) => question.id === id)).filter(Boolean);
}

function selectHarmfulGroup(scores) {
  return [...GROUPS].sort((a, b) => {
    const compositeDiff = scores.composite[b] - scores.composite[a];
    if (compositeDiff !== 0) return compositeDiff;
    const harmfulDiff = scores.harmful[b] - scores.harmful[a];
    if (harmfulDiff !== 0) return harmfulDiff;
    const normalDiff = scores.normal[b] - scores.normal[a];
    if (normalDiff !== 0) return normalDiff;
    return GROUPS.indexOf(a) - GROUPS.indexOf(b);
  })[0];
}

function selectUsefulGroup(scores, harmfulGroup) {
  const candidates = GROUPS.filter((group) => group !== harmfulGroup)
    .sort((a, b) => {
      const normalDiff = scores.normal[b] - scores.normal[a];
      if (normalDiff !== 0) return normalDiff;
      const harmfulDiff = scores.harmful[a] - scores.harmful[b];
      if (harmfulDiff !== 0) return harmfulDiff;
      return GROUPS.indexOf(a) - GROUPS.indexOf(b);
    })
    .slice(0, 3);

  return candidates.sort((a, b) => {
    const harmfulDiff = scores.harmful[a] - scores.harmful[b];
    if (harmfulDiff !== 0) return harmfulDiff;
    const normalDiff = scores.normal[b] - scores.normal[a];
    if (normalDiff !== 0) return normalDiff;
    return GROUPS.indexOf(a) - GROUPS.indexOf(b);
  })[0];
}

function buildSplitGroups() {
  const scores = calculateScores(true);
  const harmfulGroup = selectHarmfulGroup(scores);
  const usefulGroup = selectUsefulGroup(scores, harmfulGroup);
  return harmfulGroup === usefulGroup ? [harmfulGroup] : [harmfulGroup, usefulGroup];
}

function getResult() {
  if (!state.pairIds.length) state.pairIds = buildPairIds();
  if (!state.splitGroups.length) state.splitGroups = buildSplitGroups();

  const scores = calculateScores(true);
  const harmfulGroup = selectHarmfulGroup(scores);
  const usefulGroup = selectUsefulGroup(scores, harmfulGroup);
  const harmfulGod = resolveSplitGod("harmful", harmfulGroup);
  const usefulGod = resolveSplitGod("useful", usefulGroup);
  const rows = GROUPS.map((group) => ({
    group,
    normal: scores.normal[group],
    harmful: scores.harmful[group],
    composite: scores.composite[group]
  }));

  return {
    scores,
    rows,
    harmfulGroup,
    usefulGroup,
    harmfulGod,
    usefulGod,
    topGroups: selectTopGroupsFromMain(),
    pairQuestions: getSelectedPairQuestions()
  };
}

function resolveSplitGod(kind, group) {
  const question = splitQuestions[group];
  const value = getAnswer(splitKey(kind, group));
  const leftScore = -2 * value;
  const rightScore = 2 * value;
  return leftScore >= rightScore ? question.leftName : question.rightName;
}

function stageShell(content, actions = "") {
  return `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          ${phaseMark()}
          <div>
            <p class="brand-title">十神通道测试</p>
            <p class="brand-subtitle">25 题完成用神组、忌神组与组内拆分</p>
          </div>
        </div>
        <div class="top-actions">${actions}</div>
      </header>
      <section class="stage">${content}</section>
    </div>
  `;
}

function phaseMark() {
  return `
    <svg class="brand-mark" viewBox="0 0 64 64" role="img" aria-label="五组循环标记">
      <circle cx="32" cy="32" r="28" fill="#fffaf1" stroke="#007c7a" stroke-width="3"></circle>
      <path d="M32 9 L39 28 L59 28 L43 40 L49 59 L32 47 L15 59 L21 40 L5 28 L25 28 Z" fill="#bd7a19" opacity="0.88"></path>
      <circle cx="32" cy="32" r="8" fill="#1f2733"></circle>
    </svg>
  `;
}

function renderIntro() {
  root.innerHTML = stageShell(`
    <div class="intro-grid">
      <div class="intro-copy">
        <h1>十神启动与忌神通道测试</h1>
        <p>先测五组启动，再校准前三组，最后拆出具体用神和具体忌神。最终结果只展示你的用神和忌神。</p>
        <div class="privacy-strip">请仔细思考，对照自己生活中真的遇到过的事情作答。想不起来的尽量不要强加；主测题选中间表示“我平时不会关注这个”，校准和拆分题选中间表示“中立”。</div>
        <div class="intro-actions">
          <button class="primary-button" id="startBtn">开始测试</button>
          <button class="secondary-button" id="sampleBtn">快速看结果样例</button>
        </div>
        <div class="privacy-strip">默认不上传答案。参与统计会在结果页单独询问；当前版本只保存到本机浏览器，生日与八字对比后续再接入。</div>
      </div>
      ${renderPhaseMap()}
    </div>
  `);
  document.getElementById("startBtn").addEventListener("click", () => {
    state.page = "main";
    state.mainIndex = 0;
    render();
  });
  document.getElementById("sampleBtn").addEventListener("click", () => {
    fillSampleAnswers();
    state.page = "result";
    render();
  });
}

function renderPhaseMap() {
  return `
    <svg class="phase-map" viewBox="0 0 520 520" role="img" aria-label="五组生克关系图">
      <rect x="0" y="0" width="520" height="520" rx="8" fill="#fffaf1" stroke="#ded3c3"></rect>
      <circle cx="260" cy="260" r="154" fill="none" stroke="#007c7a" stroke-width="3" stroke-dasharray="10 10"></circle>
      ${phaseNode(260, 72, "印", "#476fbd")}
      ${phaseNode(438, 202, "比劫", "#007c7a")}
      ${phaseNode(370, 410, "食伤", "#bd7a19")}
      ${phaseNode(150, 410, "财", "#b2414d")}
      ${phaseNode(82, 202, "官杀", "#1f2733")}
      <path d="M288 88 C382 112 432 162 438 202" fill="none" stroke="#007c7a" stroke-width="5" marker-end="url(#arrowTeal)"></path>
      <path d="M438 240 C430 328 402 378 370 410" fill="none" stroke="#007c7a" stroke-width="5" marker-end="url(#arrowTeal)"></path>
      <path d="M332 426 C252 454 190 448 150 410" fill="none" stroke="#007c7a" stroke-width="5" marker-end="url(#arrowTeal)"></path>
      <path d="M116 390 C78 312 68 250 82 202" fill="none" stroke="#007c7a" stroke-width="5" marker-end="url(#arrowTeal)"></path>
      <path d="M102 166 C142 102 198 76 260 72" fill="none" stroke="#007c7a" stroke-width="5" marker-end="url(#arrowTeal)"></path>
      <path d="M410 220 L168 392" stroke="#b2414d" stroke-width="4" stroke-linecap="round" opacity="0.75"></path>
      <path d="M150 382 L250 104" stroke="#b2414d" stroke-width="4" stroke-linecap="round" opacity="0.75"></path>
      <path d="M250 100 L366 382" stroke="#b2414d" stroke-width="4" stroke-linecap="round" opacity="0.75"></path>
      <path d="M360 392 L98 214" stroke="#b2414d" stroke-width="4" stroke-linecap="round" opacity="0.75"></path>
      <path d="M108 202 L404 202" stroke="#b2414d" stroke-width="4" stroke-linecap="round" opacity="0.75"></path>
      <defs>
        <marker id="arrowTeal" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L6,3 z" fill="#007c7a"></path>
        </marker>
      </defs>
      <text x="260" y="252" text-anchor="middle" font-size="24" font-weight="800" fill="#1f2733">生 / 克</text>
      <text x="260" y="282" text-anchor="middle" font-size="15" fill="#68707c">启动频率与压制方式分开计算</text>
    </svg>
  `;
}

function phaseNode(x, y, label, color) {
  return `
    <g>
      <circle cx="${x}" cy="${y}" r="44" fill="${color}"></circle>
      <text x="${x}" y="${y + 8}" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">${label}</text>
    </g>
  `;
}

function renderQuestion(kind) {
  const config = getQuestionConfig(kind);
  const value = getAnswer(config.key);
  root.innerHTML = stageShell(`
    ${renderProgress(config)}
    <article class="question-shell">
      <p class="eyebrow">${config.eyebrow}</p>
      <h1 class="question-text">${config.question.text}</h1>
      ${config.optionsHtml}
      ${renderSlider(config, value)}
      <div class="nav-row">
        <button class="secondary-button" id="prevBtn">${config.prevLabel}</button>
        <button class="primary-button" id="nextBtn">${config.nextLabel}</button>
      </div>
    </article>
  `, `<button class="ghost-button" id="restartBtn">重新开始</button>`);
  bindQuestionEvents(config);
}

function getQuestionConfig(kind) {
  if (kind === "main") {
    const question = mainQuestions[state.mainIndex];
    return {
      kind,
      question,
      key: scoreKey("main", question.id),
      index: state.mainIndex,
      total: mainQuestions.length,
      eyebrow: `主测 ${state.mainIndex + 1} / ${mainQuestions.length}`,
      leftLabel: "不符合",
      rightLabel: "符合",
      optionsHtml: "",
      prevLabel: state.mainIndex === 0 ? "返回首页" : "上一题",
      nextLabel: state.mainIndex === mainQuestions.length - 1 ? "进入校准" : "下一题"
    };
  }

  if (kind === "pair") {
    if (!state.pairIds.length) state.pairIds = buildPairIds();
    const questions = getSelectedPairQuestions();
    const question = questions[state.pairIndex];
    return {
      kind,
      question,
      key: scoreKey("pair", question.id),
      index: state.pairIndex,
      total: questions.length,
      eyebrow: `前三组校准 ${state.pairIndex + 1} / ${questions.length}`,
      leftLabel: "同意题目",
      rightLabel: "不同意题目",
      optionsHtml: "",
      prevLabel: state.pairIndex === 0 ? "返回主测" : "上一题",
      nextLabel: state.pairIndex === questions.length - 1 ? "进入拆分" : "下一题"
    };
  }

  if (!state.splitGroups.length) state.splitGroups = buildSplitGroups();
  const group = state.splitGroups[state.splitIndex];
  const question = splitQuestions[group];
  const scores = calculateScores(true);
  const harmfulGroup = selectHarmfulGroup(scores);
  const role = group === harmfulGroup ? "harmful" : "useful";
  return {
    kind,
    role,
    question,
    key: splitKey(role, group),
    index: state.splitIndex,
    total: state.splitGroups.length,
    eyebrow: `组内拆分 ${state.splitIndex + 1} / ${state.splitGroups.length}`,
    leftLabel: "更偏左侧",
    rightLabel: "更偏右侧",
    optionsHtml: renderSplitOptions(question),
    prevLabel: state.splitIndex === 0 ? "返回校准" : "上一题",
    nextLabel: state.splitIndex === state.splitGroups.length - 1 ? "查看结果" : "下一题"
  };
}

function renderSplitOptions(question) {
  return `
    <div class="pair-options">
      <div class="option-panel">
        <p class="option-label">左侧倾向</p>
        <p class="option-description">${question.leftDescription}</p>
      </div>
      <div class="option-panel">
        <p class="option-label">右侧倾向</p>
        <p class="option-description">${question.rightDescription}</p>
      </div>
    </div>
  `;
}

function renderSlider(config, value) {
  return `
    <div class="slider-block">
      <div class="slider-labels">
        <span>${config.leftLabel}</span>
        <strong class="slider-value" id="sliderValue">${value}</strong>
        <span>${config.rightLabel}</span>
      </div>
      <input id="answerSlider" type="range" min="-5" max="5" step="1" value="${value}" aria-label="答案滑条" />
      <div class="range-ticks">${renderRangeTicks(config.kind)}</div>
    </div>
  `;
}

function renderRangeTicks(kind) {
  const zeroLabel = kind === "main" ? "我平时不会关注这个" : "中立";
  return Array.from({ length: 11 }, (_, index) => {
    const tick = index - 5;
    if (tick === 0) {
      return `<span class="zero-tick"><strong>0</strong><small>${zeroLabel}</small></span>`;
    }
    return `<span>${tick}</span>`;
  }).join("");
}

function renderProgress(config) {
  const percent = Math.round(((config.index + 1) / config.total) * 100);
  return `
    <div class="progress-wrap">
      <div class="progress-meta">
        <span>${config.eyebrow}</span>
        <span>${percent}%</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>
    </div>
  `;
}

function bindQuestionEvents(config) {
  document.getElementById("restartBtn").addEventListener("click", restart);
  document.getElementById("answerSlider").addEventListener("input", (event) => {
    setAnswer(config.key, Number(event.target.value));
    document.getElementById("sliderValue").textContent = event.target.value;
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    navigateQuestion(config.kind, -1);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    navigateQuestion(config.kind, 1);
  });
}

function navigateQuestion(kind, direction) {
  if (kind === "main") {
    if (direction < 0 && state.mainIndex === 0) {
      state.page = "intro";
      render();
      return;
    }
    if (direction > 0 && state.mainIndex === mainQuestions.length - 1) {
      state.pairIds = buildPairIds();
      state.pairIndex = 0;
      state.page = "pair";
      render();
      return;
    }
    state.mainIndex += direction;
  }

  if (kind === "pair") {
    const total = getSelectedPairQuestions().length;
    if (direction < 0 && state.pairIndex === 0) {
      state.page = "main";
      state.mainIndex = mainQuestions.length - 1;
      render();
      return;
    }
    if (direction > 0 && state.pairIndex === total - 1) {
      state.splitGroups = buildSplitGroups();
      state.splitIndex = 0;
      state.page = "split";
      render();
      return;
    }
    state.pairIndex += direction;
  }

  if (kind === "split") {
    const total = state.splitGroups.length;
    if (direction < 0 && state.splitIndex === 0) {
      state.page = "pair";
      state.pairIndex = getSelectedPairQuestions().length - 1;
      render();
      return;
    }
    if (direction > 0 && state.splitIndex === total - 1) {
      state.page = "result";
      render();
      return;
    }
    state.splitIndex += direction;
  }

  render();
}

function renderResult() {
  const result = getResult();
  root.innerHTML = stageShell(`
    <div class="result-hero result-hero-simple">
      <div>
        <p class="eyebrow">测试结果</p>
        <h1>你的用神是：${result.usefulGod}</h1>
        <p class="final-result-line">你的忌神是：${result.harmfulGod}</p>
        ${renderVerdictText(result)}
        <div class="result-actions">
          <button class="primary-button" id="copyBtn">复制结果</button>
          <button class="secondary-button" id="restartResultBtn">重新测试</button>
        </div>
        ${state.copyStatus ? `<div class="toast">${state.copyStatus}</div>` : ""}
        ${state.manualCopyText ? `<textarea class="copy-output" readonly>${escapeHtml(state.manualCopyText)}</textarea>` : ""}
      </div>
    </div>
    ${renderCollectionForm(result)}
  `, `<button class="ghost-button" id="topRestartBtn">重新开始</button>`);

  document.getElementById("topRestartBtn").addEventListener("click", restart);
  document.getElementById("restartResultBtn").addEventListener("click", restart);
  document.getElementById("copyBtn").addEventListener("click", () => copyResult(result));
  bindCollectionForm(result);
}

function buildShortExplanation(result) {
  return `你的用神是：${result.usefulGod}\n你的忌神是：${result.harmfulGod}`;
}

function renderVerdictText(result) {
  const usefulVerdict = resultVerdicts[result.usefulGod]?.useful;
  const harmfulVerdict = resultVerdicts[result.harmfulGod]?.harmful;

  if (!usefulVerdict && !harmfulVerdict) return "";

  return `
    <div class="verdict-list">
      ${renderVerdictCard("用神判词", usefulVerdict)}
      ${renderVerdictCard("忌神判词", harmfulVerdict)}
    </div>
  `;
}

function renderVerdictCard(label, verdict) {
  if (!verdict?.title && !verdict?.body) return "";

  return `
    <article class="verdict-card">
      <p class="verdict-label">${label}</p>
      <h2>${escapeHtml(verdict.title || "")}</h2>
      <p>${escapeHtml(verdict.body || "")}</p>
    </article>
  `;
}

function renderCollectionForm(result) {
  return `
    <section class="collection-section">
      <div class="section-heading">
        <h2>加入统计表</h2>
      </div>
      <form class="collection-form" id="collectionForm">
        <label class="input-label">
          ID
          <input
            class="text-input"
            id="collectionUserId"
            maxlength="40"
            value="${escapeHtml(state.collectionUserId)}"
            placeholder="填写你想留下的 ID"
            required
          />
        </label>
        <label class="input-label">
          生日
          <input
            class="text-input"
            id="birthDate"
            type="date"
            value="${escapeHtml(state.birthDate)}"
            required
          />
        </label>
        <label class="input-label">
          出生小时，可空缺
          <select class="text-input" id="birthHour">
            ${renderBirthHourOptions(state.birthHour)}
          </select>
        </label>
        <input type="hidden" name="usefulGod" value="${escapeHtml(result.usefulGod)}" />
        <input type="hidden" name="harmfulGod" value="${escapeHtml(result.harmfulGod)}" />
        <p class="notice">提交后会写入表格：ID、生日、出生小时、用神、忌神、提交时间。出生小时不知道可以留空。</p>
        <div class="form-actions">
          <button class="primary-button" type="submit">${state.collectionSubmitted ? "已提交，再次更新" : "提交到统计表"}</button>
        </div>
        ${state.collectionStatus ? `<div class="toast">${state.collectionStatus}</div>` : ""}
      </form>
    </section>
  `;
}

function renderBirthHourOptions(selectedHour) {
  const emptySelected = selectedHour === "" ? "selected" : "";
  const hourOptions = Array.from({ length: 24 }, (_, hour) => {
    const value = String(hour).padStart(2, "0");
    const selected = selectedHour === value ? "selected" : "";
    return `<option value="${value}" ${selected}>${value}:00-${value}:59</option>`;
  }).join("");

  return `<option value="" ${emptySelected}>不确定 / 空缺</option>${hourOptions}`;
}

function bindCollectionForm(result) {
  const form = document.getElementById("collectionForm");
  const userIdInput = document.getElementById("collectionUserId");
  const birthDateInput = document.getElementById("birthDate");
  const birthHourInput = document.getElementById("birthHour");

  if (userIdInput) userIdInput.addEventListener("input", (event) => {
    state.collectionUserId = event.target.value;
  });

  if (birthDateInput) birthDateInput.addEventListener("input", (event) => {
    state.birthDate = event.target.value;
  });

  if (birthHourInput) birthHourInput.addEventListener("change", (event) => {
    state.birthHour = event.target.value;
  });

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitCollection(result);
  });
}

async function submitCollection(result) {
  const userId = state.collectionUserId.trim();
  const birthDate = state.birthDate;
  const birthHour = state.birthHour;

  if (!userId) {
    state.collectionStatus = "请先填写 ID。";
    render();
    return;
  }

  if (!birthDate) {
    state.collectionStatus = "请先填写生日。";
    render();
    return;
  }

  const payload = buildCollectionPayload({ userId, birthDate, birthHour, result });
  saveLocalCollection(payload);

  if (!COLLECTION_ENDPOINT) {
    state.collectionStatus = "表格接口还没有配置，已先保存到本机。把 Apps Script URL 填进 COLLECTION_ENDPOINT 后，就会写入表格。";
    state.collectionSubmitted = true;
    render();
    return;
  }

  try {
    await fetch(COLLECTION_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });
    state.collectionStatus = "已提交到统计表。";
    state.collectionSubmitted = true;
  } catch {
    state.collectionStatus = "提交失败，请稍后再试，或检查表格接口地址。";
  }

  render();
}

function buildCollectionPayload({ userId, birthDate, birthHour, result }) {
  return {
    submittedAt: new Date().toISOString(),
    testVersion: TEST_VERSION,
    userId,
    birthDate,
    birthHour,
    usefulGod: result.usefulGod,
    harmfulGod: result.harmfulGod,
    usefulGroup: result.usefulGroup,
    harmfulGroup: result.harmfulGroup
  };
}

function saveLocalCollection(payload) {
  const rows = getLocalCollections();
  rows.push(payload);
  localStorage.setItem("tenGodCollections", JSON.stringify(rows));
}

function getLocalCollections() {
  try {
    return JSON.parse(localStorage.getItem("tenGodCollections") || "[]");
  } catch {
    return [];
  }
}

function buildNarrative(result) {
  return [
    `${result.usefulGroup}作为用神组：${groupExplanations[result.usefulGroup].useful}`,
    `${result.harmfulGroup}作为忌神组：${groupExplanations[result.harmfulGroup].harmful}`,
    `${result.usefulGod}：${godExplanations[result.usefulGod]}`,
    `${result.harmfulGod}：${godExplanations[result.harmfulGod]}`,
    "这里的用神和忌神来自答题结构，不等同于完整命盘结论；它描述的是当前测试里哪条通道更可用，哪条通道更容易通过压制或过度启动形成问题。"
  ];
}

function renderBars(rows, key) {
  const max = Math.max(1, ...rows.map((row) => Math.abs(row[key])));
  return `
    <div class="chart-list">
      ${rows.map((row) => {
        const width = Math.max(4, Math.round((Math.abs(row[key]) / max) * 50));
        const isNegative = row[key] < 0;
        return `
          <div class="chart-row">
            <span class="chart-label">${row.group}</span>
            <span class="bar-track">
              <span class="bar-fill ${isNegative ? "negative" : ""}" style="width:${width}%"></span>
            </span>
            <span class="chart-value">${row[key]}</span>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderScoreTable(rows) {
  return `
    <table class="score-table">
      <thead>
        <tr>
          <th>组</th>
          <th>普通分</th>
          <th>忌神分</th>
          <th>忌神综合分</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((row) => `
          <tr>
            <td>${row.group}</td>
            <td>${row.normal}</td>
            <td>${row.harmful}</td>
            <td>${row.composite}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderAnswerList() {
  const mainItems = mainQuestions.map((question) => ({
    label: `主测 ${question.id}`,
    value: getAnswer(scoreKey("main", question.id))
  }));
  const pairItems = getSelectedPairQuestions().map((question, index) => ({
    label: `校准题 ${index + 1}`,
    value: getAnswer(scoreKey("pair", question.id))
  }));
  const splitItems = state.splitGroups.map((group, index) => {
    const scores = calculateScores(true);
    const harmfulGroup = selectHarmfulGroup(scores);
    const role = group === harmfulGroup ? "harmful" : "useful";
    return {
      label: `组内拆分题 ${index + 1}`,
      value: getAnswer(splitKey(role, group))
    };
  });
  return `
    <ul class="answer-list">
      ${[...mainItems, ...pairItems, ...splitItems].map((item) => `
        <li class="answer-item">
          <span>${item.label}</span>
          <span class="pill">${item.value}</span>
        </li>
      `).join("")}
    </ul>
  `;
}

function renderStatsPanel(result) {
  const submissions = getLocalSubmissions();
  if (state.joinedStats) {
    return `
      <p class="notice">已加入本机统计样本。正式后台接入后，这里会改为提交到聚合数据库。</p>
      ${renderLocalStats(submissions)}
    `;
  }

  if (state.statsChoice === "yes") {
    return `
      <form class="stats-form" id="statsForm">
        <label class="input-label">
          展示名称
          <input class="text-input" id="displayName" maxlength="24" value="${state.displayName}" placeholder="可以填昵称" />
        </label>
        <p class="notice">当前只记录展示名称和本次测试结果到本机浏览器；生日与八字对比后续版本再接入。</p>
        <div class="form-actions">
          <button class="primary-button" type="submit">加入统计预览</button>
          <button class="secondary-button" id="cancelStats" type="button">暂不参加</button>
        </div>
      </form>
      ${renderLocalStats(submissions)}
    `;
  }

  if (state.statsChoice === "no") {
    return `
      <p class="notice">已选择暂不参与统计。本次结果仍可复制，也不会写入本机统计样本。</p>
      <button class="secondary-button" id="joinStatsLater">改为参与</button>
      ${renderLocalStats(submissions)}
    `;
  }

  return `
    <p class="notice">是否愿意把这次结果加入统计预览？当前版本不会上传网络，只会保存到当前浏览器。</p>
    <div class="choice-row">
      <button class="primary-button" id="joinStats">愿意参与</button>
      <button class="secondary-button" id="skipStats">暂不参与</button>
    </div>
    ${renderLocalStats(submissions)}
  `;
}

function renderLocalStats(submissions) {
  if (!submissions.length) {
    return `<p class="notice">本机统计样本数：0</p>`;
  }
  const usefulCounts = countBy(submissions, "usefulGroup");
  const harmfulCounts = countBy(submissions, "harmfulGroup");
  return `
    <div class="stats-preview">
      <p class="notice">本机统计样本数：${submissions.length}</p>
      <h3>用神组分布</h3>
      ${renderDistribution(usefulCounts)}
      <h3>忌神组分布</h3>
      ${renderDistribution(harmfulCounts)}
    </div>
  `;
}

function renderDistribution(counts) {
  const rows = GROUPS.map((group) => ({ group, value: counts[group] || 0 }));
  const max = Math.max(1, ...rows.map((row) => row.value));
  return `
    <div class="chart-list">
      ${rows.map((row) => `
        <div class="chart-row">
          <span class="chart-label">${row.group}</span>
          <span class="bar-track"><span class="bar-fill" style="width:${Math.round((row.value / max) * 50)}%"></span></span>
          <span class="chart-value">${row.value}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function countBy(items, key) {
  return items.reduce((counts, item) => {
    counts[item[key]] = (counts[item[key]] || 0) + 1;
    return counts;
  }, {});
}

function bindStatsEvents(result) {
  const join = document.getElementById("joinStats");
  const skip = document.getElementById("skipStats");
  const later = document.getElementById("joinStatsLater");
  const cancel = document.getElementById("cancelStats");
  const form = document.getElementById("statsForm");
  const input = document.getElementById("displayName");

  if (join) join.addEventListener("click", () => {
    state.statsChoice = "yes";
    render();
  });

  if (skip) skip.addEventListener("click", () => {
    state.statsChoice = "no";
    render();
  });

  if (later) later.addEventListener("click", () => {
    state.statsChoice = "yes";
    render();
  });

  if (cancel) cancel.addEventListener("click", () => {
    state.statsChoice = "no";
    render();
  });

  if (input) input.addEventListener("input", (event) => {
    state.displayName = event.target.value;
  });

  if (form) form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = state.displayName.trim();
    if (!name) {
      state.copyStatus = "请先填写展示名称。";
      render();
      return;
    }
    saveLocalSubmission(name, result);
    state.joinedStats = true;
    state.copyStatus = "已加入本机统计样本。";
    render();
  });
}

function getLocalSubmissions() {
  try {
    return JSON.parse(localStorage.getItem("tenGodSubmissions") || "[]");
  } catch {
    return [];
  }
}

function saveLocalSubmission(displayName, result) {
  const submissions = getLocalSubmissions();
  submissions.push({
    displayName,
    testVersion: TEST_VERSION,
    completedAt: new Date().toISOString(),
    usefulGroup: result.usefulGroup,
    harmfulGroup: result.harmfulGroup,
    usefulGod: result.usefulGod,
    harmfulGod: result.harmfulGod,
    scores: result.rows
  });
  localStorage.setItem("tenGodSubmissions", JSON.stringify(submissions));
}

async function copyResult(result) {
  const text = buildCopyText(result);
  try {
    await navigator.clipboard.writeText(text);
    state.copyStatus = "结果已复制。";
    state.manualCopyText = "";
  } catch {
    state.copyStatus = "浏览器限制了自动复制，结果文本已展开。";
    state.manualCopyText = text;
  }
  render();
}

function buildCopyText(result) {
  const usefulVerdict = resultVerdicts[result.usefulGod]?.useful;
  const harmfulVerdict = resultVerdicts[result.harmfulGod]?.harmful;
  return [
    "十神通道测试结果",
    `完成时间: ${new Date().toLocaleString("zh-CN")}`,
    `你的用神是: ${result.usefulGod}`,
    `你的忌神是: ${result.harmfulGod}`,
    "",
    usefulVerdict ? `用神判词: ${usefulVerdict.title}\n${usefulVerdict.body}` : "",
    harmfulVerdict ? `忌神判词: ${harmfulVerdict.title}\n${harmfulVerdict.body}` : ""
  ].filter(Boolean).join("\n");
}

function fillSampleAnswers() {
  mainQuestions.forEach((question) => {
    const value = [3, 4, -2, 2, 5, 3, 4, -1, 2, 5, 1, -2, 2, 4, 0, 2, -1, 3, 4, 1][question.id - 1];
    setAnswer(scoreKey("main", question.id), value);
  });
  state.pairIds = buildPairIds();
  getSelectedPairQuestions().forEach((question, index) => {
    setAnswer(scoreKey("pair", question.id), [3, -2, 4][index] || 0);
  });
  state.splitGroups = buildSplitGroups();
  state.splitGroups.forEach((group, index) => {
    const scores = calculateScores(true);
    const harmfulGroup = selectHarmfulGroup(scores);
    const role = group === harmfulGroup ? "harmful" : "useful";
    setAnswer(splitKey(role, group), index === 0 ? 3 : -2);
  });
}

function restart() {
  state.page = "intro";
  state.mainIndex = 0;
  state.pairIndex = 0;
  state.splitIndex = 0;
  state.answers = {};
  state.pairIds = [];
  state.splitGroups = [];
  state.statsChoice = null;
  state.displayName = "";
  state.collectionUserId = "";
  state.birthDate = "";
  state.birthHour = "";
  state.collectionStatus = "";
  state.collectionSubmitted = false;
  state.copyStatus = "";
  state.manualCopyText = "";
  state.joinedStats = false;
  render();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function render() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (state.page === "intro") renderIntro();
  if (state.page === "main") renderQuestion("main");
  if (state.page === "pair") renderQuestion("pair");
  if (state.page === "split") renderQuestion("split");
  if (state.page === "result") renderResult();
}

render();
