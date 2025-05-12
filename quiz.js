// 测试题目数据
const quizData = [
    // 模块1：认知决策（1-10题）
    {
        module: "模块1：认知决策",
        question: "1. 朋友说\"你决定就好\"时，你更可能：",
        options: [
            { text: "A. 快速列出三个优选方案", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 说\"那我们先喝杯咖啡\"", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 1 } },
            { text: "C. 打开手机查推荐", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "2. 看到流浪猫对你叫，你会：",
        options: [
            { text: "A. 蹲下试图抚摸", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 买罐头放在远处", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 1 } },
            { text: "C. 拍照发朋友圈", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "3. 发现恋人藏着小秘密，你：",
        options: [
            { text: "A. 直接问\"有什么要告诉我吗\"", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 制造机会让ta自己暴露", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 装作不知道", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "4. 购物时面对多款喜欢的商品，你会：",
        options: [
            { text: "A. 遵循预算，果断放弃超额项", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 询问同伴意见再做决定", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 1 } },
            { text: "C. 参考在线评价排序", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "5. 遇到意见不合的讨论，你倾向：",
        options: [
            { text: "A. 提供数据支持自己观点", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 1 } },
            { text: "B. 提问了解对方想法根源", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 转移到双方都认同的话题", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "6. 小组旅行计划讨论时，你会：",
        options: [
            { text: "A. 主动提议几个方案并解释", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 倾听所有意见后投票决定", visibleScore: { type: "sub", value: 1 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 负责搜集各项实用信息", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "7. 处理突发问题时，你的第一反应是：",
        options: [
            { text: "A. 思考各种可能的解决方案", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 寻找有经验的人请教", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "C. 冷静分析问题的来源", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "8. 选择餐厅时，决定性因素是：",
        options: [
            { text: "A. 环境氛围和服务态度", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 菜品质量和口碑评价", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 1 } },
            { text: "C. 距离和等待时间", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "9. 面对复杂任务，你会：",
        options: [
            { text: "A. 分解成小步骤逐一解决", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 找人合作优势互补", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 先研究相关背景资料", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "10. 得知朋友遇到困难，你会：",
        options: [
            { text: "A. 主动提供实际帮助和建议", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 表达支持但等待对方开口", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "C. 分享类似经历作为参考", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    
    // 模块2：情感反射（11-20题）
    {
        module: "模块2：情感反射",
        question: "11. 约会对象迟到20分钟，你坐下后会：",
        options: [
            { text: "A. 查看工作邮件", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 补妆整理发型", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 1 } },
            { text: "C. 研究菜单价格", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "12. 伴侣赠送不合心意的礼物，你：",
        options: [
            { text: "A. 微笑接受并真心感谢用心", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 委婉表达期待的方向", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "C. 欣赏其意外性和创意", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "13. 朋友圈看到令人羡慕的生活，你：",
        options: [
            { text: "A. 思考如何实现类似目标", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 发评论表达祝福和赞美", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 欣赏片刻后继续浏览", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "14. 收到暧昧信息\"在干嘛\"，最佳回复：",
        options: [
            { text: "A. \"在想你什么时候问\"", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "B. \"刚做完瑜伽\"附自拍", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "C. \"准备开会\"", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "15. 长期关系中，你更关注：",
        options: [
            { text: "A. 彼此情感连接的稳定性", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 个人空间和成长的平衡", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 1 } },
            { text: "C. 共同兴趣和价值观", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "16. 感到不安时，你会：",
        options: [
            { text: "A. 寻求亲密关系的确认", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 转向独处进行自我调节", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "C. 投入工作或爱好分散注意", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "17. 听到\"没人配得上你\"会理解为：",
        options: [
            { text: "A. 夸奖", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 1 } },
            { text: "B. 同情", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "C. 客套", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "18. 情感受挫后，你的应对方式是：",
        options: [
            { text: "A. 找朋友长谈寻求安慰", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 独自分析经验教训并规划", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 1 } },
            { text: "C. 转向其他生活领域重获成就感", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "19. 亲密关系中遇到冲突，你会：",
        options: [
            { text: "A. 保持冷静分析问题本质", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 直接表达情感需求和感受", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 暂时回避等情绪平静再讨论", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "20. 面对表扬，你通常会：",
        options: [
            { text: "A. 谦虚归功于团队或运气", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 自信接受并分享成功经验", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "C. 简单感谢并转移话题", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    
    // 模块3：社交戏剧（21-30题）
    {
        module: "模块3：社交戏剧",
        question: "21. 聚会中被冷落时，你会：",
        options: [
            { text: "A. 主动融入其他对话圈", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 等待熟人注意并邀请你", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 享受独处时光观察环境", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "22. KTV里有人切了你的歌，你：",
        options: [
            { text: "A. 下次抢先切回", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 微笑说\"这首我也喜欢\"", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 低头玩手机", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "23. 群体中有人提出你不认同的观点：",
        options: [
            { text: "A. 清晰表达自己的不同意见", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 通过提问引导思考其他角度", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 保持中立不积极参与", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "24. 工作中遇到强势同事，你会：",
        options: [
            { text: "A. 坚持自己的边界和立场", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 寻找合作而非对抗的方式", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "C. 根据情况灵活调整策略", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "25. 同事总用你杯子喝水，你会：",
        options: [
            { text: "A. 当面把杯子送ta", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 买同款放办公桌", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 1 } },
            { text: "C. 改用保温杯", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "26. 朋友圈子里组织活动时，你：",
        options: [
            { text: "A. 通常是提议者和组织者", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 积极参与但不主导", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 根据兴趣和时间决定参与度", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "27. 团队出现意见分歧，你会：",
        options: [
            { text: "A. 寻找各方认可的折中方案", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 分析利弊推动最优解决方案", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "C. 支持多数人的决定", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "28. 被当众开玩笑说\"母胎单身\"，你回应：",
        options: [
            { text: "A. \"你在说自己吗\"", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "B. \"要给我介绍吗\"", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "C. 转移话题", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "29. 在新环境社交，你倾向：",
        options: [
            { text: "A. 主动介绍自己并提问", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 先观察氛围再融入", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 1 } },
            { text: "C. 等待自然而然的互动机会", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "30. 与重要人物交谈时，你会：",
        options: [
            { text: "A. 重点展示自己的优势和成果", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 展现倾听能力和求知欲", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 保持自然真实的交流风格", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    
    // 模块4：潜意识投射（31-40题）
    {
        module: "模块4：潜意识投射",
        question: "31. 想象自己是故事主角，会选择：",
        options: [
            { text: "A. 有超能力的普通人", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 智谋型的幕后策划者", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 1 } },
            { text: "C. 经历冒险的旅行者", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "32. 梦见被野兽追赶，你的反应：",
        options: [
            { text: "A. 爬上树观察", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 转身抚摸它", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 1 } },
            { text: "C. 突然醒来", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "33. 如果拥有隐身能力，会用来：",
        options: [
            { text: "A. 了解他人真实想法", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 悄悄帮助需要帮助的人", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "C. 体验平时无法体验的场景", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "34. 人生如果是一部电影，你希望：",
        options: [
            { text: "A. 你是导演掌控整体走向", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 你是主角经历丰富情感", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 你是编剧创造多种可能", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "35. 如果要变成家具，希望是：",
        options: [
            { text: "A. 门锁", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 沙发", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 吊灯", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "36. 幻想中理想伴侣会：",
        options: [
            { text: "A. 懂你所有需求但有自己边界", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "B. 充满神秘感需要你去探索", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 1 } },
            { text: "C. 与你共同成长相互成就", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "37. 童话故事中最向往：",
        options: [
            { text: "A. 拯救他人的英雄角色", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 智慧引导主角的导师", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 见证冒险的旁观者", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "38. 荒岛上看到神秘果实会：",
        options: [
            { text: "A. 画警告标志离开", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 浅尝后喂给猴子", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 1 } },
            { text: "C. 拍照存档", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "39. 如果能选择超能力，会选：",
        options: [
            { text: "A. 读心术", visibleScore: { type: "dom", value: 0 }, hiddenScore: { type: "sub", value: 2 } },
            { text: "B. 治愈能力", visibleScore: { type: "sub", value: 2 }, hiddenScore: { type: "dom", value: 0 } },
            { text: "C. 时间控制", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    },
    {
        question: "40. 面对未来不确定性，你选择：",
        options: [
            { text: "A. 制定多套备选方案", visibleScore: { type: "dom", value: 2 }, hiddenScore: { type: "sub", value: 0 } },
            { text: "B. 相信自己适应能力", visibleScore: { type: "sub", value: 0 }, hiddenScore: { type: "dom", value: 2 } },
            { text: "C. 享受当下不过度担忧", visibleScore: { type: "neutral", value: 1 }, hiddenScore: { type: "neutral", value: 1 } }
        ]
    }
];

// 镜像题对照表（用于波动指数计算）
const mirrorQuestions = [
    { q1: 3, q2: 17 },  // 第3题和第17题是镜像题
    { q1: 5, q2: 23 },
    { q1: 11, q2: 29 },
    { q1: 14, q2: 28 },
    { q1: 22, q2: 35 }
];

// 当前问题索引
let currentQuestionIndex = 0;

// 用户答案存储
const userAnswers = [];

// 计算得分对象
let scores = {
    visible: {
        dom: 0,
        sub: 0,
        neutral: 0
    },
    hidden: {
        dom: 0,
        sub: 0,
        neutral: 0
    }
};

// 初始化测试
function initQuiz() {
    const startButton = document.getElementById('start-btn');
    const restartButton = document.getElementById('restart-btn');
    
    if (startButton) {
        startButton.addEventListener('click', startQuiz);
    }
    
    if (restartButton) {
        restartButton.addEventListener('click', restartQuiz);
    }
}

// 开始测试
function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    showQuestion(0);
    updateProgressBar();
}

// 显示当前问题
function showQuestion(index) {
    const questionScreen = document.getElementById('question-screen');
    const questionData = quizData[index];
    
    // 检查是否有模块标题需要显示
    let moduleHTML = '';
    if (questionData.module) {
        moduleHTML = `<h2 class="module-title">${questionData.module}</h2>`;
    }
    
    let questionHTML = `
        ${moduleHTML}
        <div class="question">
            <h3>${questionData.question}</h3>
            <div class="options">
    `;
    
    questionData.options.forEach((option, optionIndex) => {
        questionHTML += `
            <div class="option" data-index="${optionIndex}">
                ${option.text}
            </div>
        `;
    });
    
    questionHTML += `
            </div>
        </div>
        <button id="next-btn" disabled>下一题</button>
    `;
    
    questionScreen.innerHTML = questionHTML;
    
    // 添加选项点击事件
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', selectOption);
    });
    
    // 添加下一题按钮事件
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', goToNextQuestion);
    
    // 更新进度显示
    updateProgressBar();
}

// 选择选项
function selectOption(event) {
    // 移除之前的选择
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // 添加当前选择
    event.currentTarget.classList.add('selected');
    
    // 启用下一题按钮
    document.getElementById('next-btn').disabled = false;
}

// 进入下一题
function goToNextQuestion() {
    // 保存当前答案
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption) {
        const optionIndex = parseInt(selectedOption.getAttribute('data-index'));
        userAnswers[currentQuestionIndex] = optionIndex;
    }
    
    // 前进到下一题
    currentQuestionIndex++;
    
    // 检查是否已完成所有题目
    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
    } else {
        calculateResults();
    }
}

// 更新进度条
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    const progress = (currentQuestionIndex / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `题目 ${currentQuestionIndex + 1}/${quizData.length}`;
}

// 计算测试结果
function calculateResults() {
    // 重置分数
    scores = {
        visible: { dom: 0, sub: 0, neutral: 0 },
        hidden: { dom: 0, sub: 0, neutral: 0 }
    };
    
    // 计算基础分数
    userAnswers.forEach((answerIndex, questionIndex) => {
        const question = quizData[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        // 累加显性分数
        const visibleType = selectedOption.visibleScore.type;
        const visibleValue = selectedOption.visibleScore.value;
        scores.visible[visibleType] += visibleValue;
        
        // 累加隐性分数
        const hiddenType = selectedOption.hiddenScore.type;
        const hiddenValue = selectedOption.hiddenScore.value;
        scores.hidden[hiddenType] += hiddenValue;
    });
    
    // 计算波动指数（镜像题差异）
    let mirrorDifference = 0;
    let mirrorPairs = 0;
    
    mirrorQuestions.forEach(pair => {
        // 索引从0开始，所以需要减1
        const q1Index = pair.q1 - 1;
        const q2Index = pair.q2 - 1;
        
        // 检查用户是否回答了这两个问题
        if (userAnswers[q1Index] !== undefined && userAnswers[q2Index] !== undefined) {
            const q1Option = quizData[q1Index].options[userAnswers[q1Index]];
            const q2Option = quizData[q2Index].options[userAnswers[q2Index]];
            
            // 计算隐性分数的差异
            const q1HiddenType = q1Option.hiddenScore.type;
            const q2HiddenType = q2Option.hiddenScore.type;
            
            // 如果类型不同，差异+1
            if (q1HiddenType !== q2HiddenType) {
                mirrorDifference += 1;
            }
            
            mirrorPairs++;
        }
    });
    
    // 计算平均差异
    const avgDifference = mirrorPairs > 0 ? mirrorDifference / mirrorPairs : 0;
    
    // 检查表演型人格修正条件
    if (avgDifference > 0.6) { // 60%的差异率，相当于>3分（假设5对镜像题）
        // 启动"表演型人格"修正
        scores.hidden.dom = Math.round(scores.hidden.dom * 0.7);
        scores.hidden.sub = Math.round(scores.hidden.sub * 0.7);
    }
    
    // 检查回避倾向
    let neutralCount = 0;
    userAnswers.forEach((answerIndex, questionIndex) => {
        const question = quizData[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        if (selectedOption.hiddenScore.type === 'neutral') {
            neutralCount++;
        }
    });
    
    // 回避倾向补偿
    if (neutralCount > 6) {
        // 启动"回避倾向"补偿
        const dominantType = scores.hidden.dom >= scores.hidden.sub ? 'dom' : 'sub';
        scores.hidden[dominantType] += 5;
    }
    
    // 显示结果
    showResults();
}

// 显示测试结果
function showResults() {
    // 隐藏问题屏幕，显示结果屏幕
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    
    // 更新分数显示
    document.getElementById('base-score').textContent = scores.hidden.dom + scores.hidden.sub + scores.hidden.neutral;
    document.getElementById('dom-score').textContent = scores.hidden.dom;
    document.getElementById('sub-score').textContent = scores.hidden.sub;
    document.getElementById('neutral-score').textContent = scores.hidden.neutral;
    
    // 确定类型
    let type;
    let description;
    let traits = [];
    
    // 根据分数确定类型
    if (scores.hidden.dom > scores.hidden.sub) {
        // 偏攻类型
        if (scores.visible.sub > scores.visible.dom) {
            // 表面受实际攻
            type = "海市攻楼型";
            description = "表面：游刃有余的社交掌控者（显性受分较高）；内核：通过满足他人获得安全感的服务型受（隐性攻分高）";
            traits = [
                "擅长制造\"被需要\"的幻觉",
                "在给予中获取隐秘支配感",
                "性吸引力峰值出现在撤退时刻"
            ];
        } else {
            // 表里如一的攻
            type = "山巅攻谷型";
            description = "表里如一的掌控者，通过理性分析和决策主导关系走向，但在情感层面保持开放和包容";
            traits = [
                "善于平衡权力与责任",
                "决策明确但不强势",
                "在亲密关系中保持稳定掌控感"
            ];
        }
    } else if (scores.hidden.sub > scores.hidden.dom) {
        // 偏受类型
        if (scores.visible.dom > scores.visible.sub) {
            // 表面攻实际受
            type = "湖底受波型";
            description = "表面：充满进取心的行动派（显性攻分较高）；内核：渴望被理解和关怀的情感型受（隐性受分高）";
            traits = [
                "通过展现能力寻求认可",
                "在强势外表下隐藏柔软需求",
                "关系中易受情感波动影响"
            ];
        } else {
            // 表里如一的受
            type = "川流受谷型";
            description = "表里如一的关怀者，乐于接受指导并在依赖中找到安全感，同时保持自我边界";
            traits = [
                "高情感敏感度和适应性",
                "在被引导中获得满足感",
                "关系中注重情感连接和共鸣"
            ];
        }
    } else {
        // 中性平衡型
        type = "平原双向型";
        description = "攻受平衡的中立者，能根据场景和对象灵活切换角色，保持情感自主权";
        traits = [
            "关系中的角色适应性强",
            "不受固定模式限制",
            "能根据伴侣需求调整互动方式"
        ];
    }
    
    // 更新类型显示
    document.getElementById('type-name').textContent = type;
    document.getElementById('type-description').textContent = description;
    
    // 更新特征列表
    const traitsList = document.getElementById('traits-list');
    traitsList.innerHTML = '';
    traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        traitsList.appendChild(li);
    });
}

// 重新开始测试
function restartQuiz() {
    // 重置数据
    currentQuestionIndex = 0;
    userAnswers.length = 0;
    scores = {
        visible: { dom: 0, sub: 0, neutral: 0 },
        hidden: { dom: 0, sub: 0, neutral: 0 }
    };
    
    // 重置界面
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

// 修改页面加载事件监听
window.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});
