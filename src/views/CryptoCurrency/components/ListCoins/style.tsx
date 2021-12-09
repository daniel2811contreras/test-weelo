import { getColor } from "@src/utils/function/assets/Colors";
import { style } from "typestyle";

export const ListCoinsStyle = style({
  width: "100%",
  height: "100%",
  overflow: "auto",
  $nest: {
    "& div:first-child": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%",
      $nest: {
        "& .contCoins": {
          width: "calc(100% - 20px)",
          maxWidth: "1280px",
          padding: "10px",
          backgroundColor: getColor().white,
          $nest: {
            "& .itemCoin": {
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              borderColor: getColor().backgroundTree,
              borderRadius: "10px",
              borderStyle: "solid",
              borderWidth: "1px",
              padding: "5px 15px",
              marginBottom: "10px",
              backgroundColor: getColor().backgroundTree,
              $nest: {
                "& .infoCoin": {
                  display: "flex",
                  flexDirection: "column",
                  width: "auto",
                  $nest: {
                    "& .nameCoin": {
                      display: "block",
                      width: "auto",
                      fontSize: "25px",
                      color: getColor().secon,
                    },
                    "& .priceCoin": {
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: getColor().primary,
                    },
                  },
                },
                "& .iconCoin": {
                  color: getColor().secon,
                  fontSize: "25px",
                  alignSelf: "center",
                  borderLeftColor: getColor().backgroundTwo,
                  borderLeftWidth: "1px",
                  borderLeftStyle: "solid",
                  paddingLeft: "10px",
                  cursor: "pointer",
                },
              },
            },
            "& .moreInfoCoin": {
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridGap: "10px",
              borderColor: getColor().backgroundTree,
              borderRadius: "10px",
              borderStyle: "solid",
              borderWidth: "1px",
              padding: "10px 35px",
              marginBottom: "10px",
              backgroundColor: getColor().backgroundTree,
              $nest: {
                "& .itemInfoCoin": {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "15px",
                  flexWrap: "nowrap",
                  color: getColor().primary,
                  fontWeight: "bold",
                  $nest: {
                    "& span": {
                      fontWeight: "normal",
                      textAlign: "end",
                    },
                  },
                },
                "@media screen and (max-width: 700px)": {
                  gridTemplateColumns: "repeat(1, 1fr)",
                },
              },
            },
          },
        },
      },
    },
  },
});
