// export type ProductItem = {
//   results: {
//     archived: boolean;
//     cover: {
//       external: { url: string };
//       file: { url: string };
//     };
//     created_by: Array<object>;
//     created_time: string;
//     icon: null | string;
//     id: string;
//     last_edited_by: Array<object>;
//     last_edited_time: string;
//     object: string;
//     parent: Array<object>;
//     properties: {
//       Name: {
//         title: [
//           {
//             plain_text: string;
//           }
//         ];
//       };
//       Github: {
//         url: string;
//       };
//       Descriotion: {
//         rich_text: [
//           {
//             text: { content: string };
//           }
//         ];
//       };
//       Tags: {
//         multi_select: [
//           {
//             id: string;
//             name: string;
//           }
//         ];
//       };
//       WorkPeriod: {
//         date: {
//           start: string;
//           end: string;
//         };
//       };
//     };
//     url: string;
//   }[]
// };

export type ProductItem = {
  archived: boolean;
  cover: {
    external: { url: string };
    file: { url: string };
  };
  created_by: Array<object>;
  created_time: string;
  icon: null | string;
  id: string;
  last_edited_by: Array<object>;
  last_edited_time: string;
  object: string;
  parent: Array<object>;
  properties: {
    Name: {
      title: [
        {
          plain_text: string;
        }
      ];
    };
    Github: {
      url: string;
    };
    Descriotion: {
      rich_text: [
        {
          text: { content: string };
        }
      ];
    };
    Tags: {
      multi_select: [
        {
          id: string;
          name: string;
        }
      ];
    };
    WorkPeriod: {
      date: {
        start: string;
        end: string;
      };
    };
  };
  url: string;
};

export type ProductItemList = ProductItem[];
