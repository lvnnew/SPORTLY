interface IDecisionDataItem {
  index: number;
  no: string;
  ok?: string | undefined;
  list?: string[] | undefined;
}

export const decisionData: IDecisionDataItem[] = [
  {
    index: 0,
    no: "Неудобно следить за графиком мероприятий",
    ok: "В Sportly вы сможете видеть все мероприятия за все время - хоть с компьютера, хоть с мобильного. Вы сможете назначать администраторов, и только они смогут вносить изменения в список",
  },
  {
    index: 0,
    no: "Нельзя отследить накладки в расписании",
    ok: "Sportly не позволит назначить на одно и тоже время и место два мероприятия",
  },
  {
    index: 0,
    no: "Трудно следить за расписанием сотрудников",
    ok: "Sportly составит личный график для каждого вашего сотрудника, что позволит всегда знать, когда у него занятия, их формат и количество записавшихся участников",
  },
  {
    index: 1,
    no: "Ваш администратор тратит время на одни и те же действия, которые можно автоматизировать",
    ok: "Sportly может вести всю рутину за вас: формировать шаблоны документов, предупреждать клиентов об окончании абонемента, о начале занятия, о списании тренировок и т. д.",
  },
  {
    index: 1,
    no: "Нет удобного доступа к документам",
    ok: "Со Sportly вся “внутренняя кухня” вашего бизнеса будет храниться в одном месте и будет доступна с любого устройства",
  },
  {
    index: 1,
    no: "Информацию об интересующем клиенте, сотруднике или мероприятии нужно искать вручную",
    ok: "В Sportly есть быстрый поиск любой необходимой информации:",
    list: [
      "Расписание занятий,",
      "карточки клиентов,",
      "активные и закончившиеся абонементы,",
      "истории посещений, бронирования занятий, оплаты счета,покупки услуг или товаров.",
    ],
  },
  {
    index: 1,
    no: "Отчеты и статистику приходится собирать вручную",
    ok: "В Sportly можно сформировать отчеты связанные с выручкой, заработной платой сотрудников, соотношением расходов и доходов или с источниками привлечения клиентов",
  },
  {
    index: 2,
    no: "Администратор может тратить до нескольких часов в день на уточнение, истек или нет абонемент посетителя",
    ok: "Учет абонементов происходит автоматически. Вы легко находите в базе посетителя и видите, какие услуги у него оплачены и сколько занятий осталось в абонементе",
  },
  {
    index: 2,
    no: "Непонятно, какого клиента и когда следует предупредить о продлении абонемента",
    ok: "Вся информация о проданных абонементах доступна в Sportly. Контролировать продажи легко, а списывать занятия можно в один клик",
  },
  {
    index: 2,
    no: "При потере или порче абонемента нужную информацию приходится восстанавливать по памяти",
    ok: "Со SPORTLY не придется вспоминать - учет тренировок ведется в единой базе",
  },
];
