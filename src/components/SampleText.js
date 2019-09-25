import React, { Fragment } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Settings from "./settings.json";

export default class SampleText extends React.Component {
  state = {
    renderContent: null
  };
  componentDidMount() {
    lang = Settings.language;
    if (lang == "english") {
      this.setState({ renderContent: this.english });
    } else if (lang == "urdu") {
      this.setState({ renderContent: this.urdu });
    }
  }
  refreshContent = () => {
    if (Settings.language == "english") {
      this.state.renderContent = english;
    } else if (Settings.language == "urdu") {
      this.state.renderContent = urdu;
    }
  };
  render() {
    english = (
      <Fragment>
        <Text
          style={{
            color: "grey",
            textAlign: "justify",

            fontSize: Settings.currentSettingsEnglish[0],
            lineHeight: Settings.currentLineHeightEnglish,
            fontFamily: Settings.currentFont
          }}
        >
          Sample Text
          {"\n"}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            paddingTop: 5,
            textAlign: "justify",

            fontSize: Settings.currentSettingsEnglish[3],
            lineHeight: Settings.currentLineHeightEnglish,
            fontFamily: Settings.currentFont
          }}
        >
          The Wizard of Oz{"\n"}
        </Text>
        <Text
          style={{
            textAlign: "justify",

            fontSize: Settings.currentSettingsEnglish[2],
            lineHeight: Settings.currentLineHeightEnglish,
            fontFamily: Settings.currentFont
          }}
        >
          Chapter XI: The Wonderful Emerald City of Oz{"\n"}
        </Text>
        <Text
          style={{
            textAlign: "justify",
            fontSize: Settings.currentSettingsEnglish[1],
            lineHeight: Settings.currentLineHeightEnglish,
            fontFamily: Settings.currentFont
          }}
        >
          Even with eyes protected by the green spectacles, Dorothy and her
          friends were at first dazzled by the brilliancy of the wonderful City.
          The streets were lined with beautiful houses all built of green marble
          and studded everywhere with sparkling emeralds. They walked over a
          pavement of the same green marble, and where the blocks were joined
          together were rows of emeralds, set closely, and glittering in the
          brightness of the sun. The window panes were of green glass; even the
          sky above the City had a green tint, and the rays of the sun were
          green.
          {"\n\n"}There were many people--men, women, and children--walking
          about, and these were all dressed in green clothes and had greenish
          skins. They looked at Dorothy and her strangely assorted company with
          wondering eyes, and the children all ran away and hid behind their
          mothers when they saw the Lion; but no one spoke to them. Many shops
          stood in the street, and Dorothy saw that everything in them was
          green. Green candy and green pop corn were offered for sale, as well
          as green shoes, green hats, and green clothes of all sorts. At one
          place a man was selling green lemonade, and when the children bought
          it Dorothy could see that they paid for it with green pennies.{"\n\n"}
          There seemed to be no horses nor animals of any kind; the men carried
          things around in little green carts, which they pushed before them.
          Everyone seemed happy and contented and prosperous.{"\n"}
        </Text>
      </Fragment>
    );

    urdu = (
      <Fragment>
        <Text
          style={{
            paddingTop: 20,
            lineHeight: Settings.currentLineHeightUrdu,
            fontSize: Settings.currentSettingsUrdu[0],
            fontFamily: Settings.currentFont
          }}
        >
          اسلام آباد(اردو پوائنٹ تازہ ترین اخبار۔04اگست 2019ء){"\n"}
        </Text>
        <Text
          style={{
            lineHeight: Settings.currentLineHeightUrdu,
            fontSize: Settings.currentSettingsUrdu[1],
            fontFamily: Settings.currentFont
          }}
        >
          اسلام آباد(اردو پوائنٹ تازہ ترین اخبار۔04اگست 2019ء) قومی ٹیم کے سابق
          فاسٹ باﺅلر شعیب اختر سرجری کے لیے آسٹریلیا روانہ ہوں گے۔ ذرائع نے
          بتایا ہے کہ گھٹنوں کے درد میں مبتلا سابق سپیڈ سٹار شعیب اختر کو بیماری
          سے جلد چھٹکارے کی امید ہے اور وہ آپریشن کیلئے آئندہ ہفتے آسٹریلیا
          روانہ ہوں گے۔ اپنے یو ٹیوب چینل پر شعیب اختر کا کہنا تھا کہ انہیں یہ
          تکلیف کیریئر کے عروج کے دور سے ہے مگر اب امید ہے کہ دو عشرے کی طویل
          مدت کے بعد اس سے نجات مل جائے گی۔ شعیب اختر کے مطابق 1997 میں ڈاکٹروں
          نے انہیں بتایا تھا کہ ان کا کیریئر اس تکلیف کی وجہ سے دو سال سے زیادہ
          طویل نہیں ہو سکے گا لیکن انہوں نے اس کے بعد کئی سال تک کرکٹ کھیلی۔ یاد
          رہے کہ قومی ٹیم کے سابق اسپیڈ اسٹار شعیب اختر نے پاکستان کرکٹ بورڈ میں
          عہدے کے لیے دلچسپی ظاہر کی ہے۔{"\n"}
        </Text>
      </Fragment>
    );

    this.refreshContent();
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.sampleTextContainer}>
          {this.state.renderContent}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10
  },
  sampleTextContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e4",
    borderTopColor: "#e4e4e4"
  }
});
