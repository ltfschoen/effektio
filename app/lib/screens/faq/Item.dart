// ignore_for_file: unused_element, always_declare_return_types, library_prefixes, prefer_const_constructors

import 'dart:io';

import 'package:effektio/common/store/separatedThemes.dart';

import 'package:effektio/common/widget/TagItem.dart';
import 'package:effektio_flutter_sdk/effektio_flutter_sdk_ffi.dart';
import 'package:flutter/painting.dart' as mColors;
import 'package:emoji_picker_flutter/emoji_picker_flutter.dart';
import 'package:flutter/material.dart';

class FaqItemScreen extends StatefulWidget {
  const FaqItemScreen({Key? key, required this.client, required this.faq})
      : super(key: key);
  final Client client;
  final Faq faq;

  @override
  _FaqItemScreenState createState() => _FaqItemScreenState();
}

TextEditingController _controller = TextEditingController();

class _FaqItemScreenState extends State<FaqItemScreen> {
  TextEditingController faqController = TextEditingController();
  bool emojiShowing = false;
  bool commentShowing = false;
  bool editFaqTitle = false;

  @override
  void initState() {
    super.initState();
    commentShowing = false;
    editFaqTitle = false;
    faqController.text = widget.faq.title();
  }

  _onEmojiSelected(Emoji emoji) {
    _controller
      ..text += emoji.emoji
      ..selection = TextSelection.fromPosition(
        TextPosition(offset: _controller.text.length),
      );
  }

  _onBackspacePressed() {
    _controller
      ..text = _controller.text.characters.skipLast(1).toString()
      ..selection = TextSelection.fromPosition(
        TextPosition(offset: _controller.text.length),
      );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppCommonTheme.backgroundColor,
        elevation: 0,
        actions: <Widget>[
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.menu),
          )
        ],
      ),
      backgroundColor: AppCommonTheme.backgroundColor,
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.fromLTRB(8.0, 8.0, 8.0, 8.0),
            child: Column(
              children: [
                Visibility(
                  visible: editFaqTitle ? true : false,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 8.0),
                        child: TextField(
                          controller: faqController,
                          style: mColors.TextStyle(color: Colors.white),
                          decoration: InputDecoration(
                            labelText: 'Faq title',
                            labelStyle: TextStyle(color: Colors.white),
                            enabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(color: Colors.white),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(color: Colors.white),
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(right: 8.0),
                        child: ElevatedButton(
                          onPressed: () {
                            setState(() {
                              editFaqTitle = false;
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  content: Text(faqController.text.toString()),
                                ),
                              );
                            });
                          },
                          child: const Text('Save'),
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(12.0, 4.0, 12.0, 4.0),
                  child: Visibility(
                    visible: editFaqTitle ? false : true,
                    child: Row(
                      children: [
                        Flexible(
                          fit: FlexFit.loose,
                          child: Text(
                            widget.faq.title(),
                            style: FAQTheme.titleStyle,
                          ),
                        ),
                        Align(
                          alignment: Alignment.centerRight,
                          child: GestureDetector(
                            onTap: () => {
                              setState(() {
                                editFaqTitle = true;
                              })
                            },
                            child: const Icon(
                              Icons.edit,
                              color: Colors.white,
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 12.0, bottom: 12.0),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        height: 40.0,
                        padding: const EdgeInsets.all(8.0),
                        margin: const EdgeInsets.only(left: 12.0),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(
                            color: FAQTheme.supportColor,
                          ),
                        ),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Image.asset(
                              'assets/images/asakerImage.png',
                            ),
                            Padding(
                              padding: const EdgeInsets.only(
                                left: 8.0,
                              ),
                              child: Text(
                                'Support',
                                style: FAQTheme.teameNameStyle,
                              ),
                            )
                          ],
                        ),
                      ),
                      const Spacer(),
                      SizedBox(
                        height: 40,
                        child: Padding(
                          padding: const EdgeInsets.only(right: 8.0),
                          child: Row(
                            children: [
                              GestureDetector(
                                onTap: () => {},
                                child: Image.asset(
                                  'assets/images/heart_like.png',
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(
                                  left: 8.0,
                                ),
                                child: Text(
                                  widget.faq.likesCount().toString(),
                                  style: FAQTheme.likeAndCommentStyle,
                                ),
                              ),
                              GestureDetector(
                                onTap: () {
                                  setState(() {
                                    commentShowing =
                                        commentShowing ? false : true;
                                  });
                                },
                                child: Row(
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.only(left: 8.0),
                                      child: Image.asset(
                                        'assets/images/comment.png',
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.only(left: 8.0),
                                      child: Text(
                                        widget.faq.commentsCount().toString(),
                                        style: FAQTheme.likeAndCommentStyle,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      )
                    ],
                  ),
                ),
                const Divider(
                  height: 2,
                  thickness: 2,
                  indent: 20,
                  endIndent: 20,
                  color: Colors.grey,
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: SizedBox(
                    height: 40,
                    child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: widget.faq.tags().length,
                      itemBuilder: (context, index) {
                        var color = widget.faq.tags().elementAt(index).color();
                        var colorToShow = 0;
                        if (color != null) {
                          var colorList = color.rgbaU8();
                          colorToShow = hexOfRGBA(
                            colorList.elementAt(0),
                            colorList.elementAt(1),
                            colorList.elementAt(2),
                            opacity: 0.7,
                          );
                        }

                        return TagListItem(
                          tagTitle: widget.faq.tags().elementAt(index).title(),
                          tagColor: colorToShow > 0
                              ? mColors.Color(colorToShow)
                              : Colors.white,
                        );
                      },
                    ),
                  ),
                ),
                const Divider(
                  height: 2,
                  thickness: 2,
                  indent: 20,
                  endIndent: 20,
                  color: Colors.grey,
                ),
                Container(),
              ],
            ),
          ),
          Visibility(
            visible: commentShowing ? true : false,
            child: Container(
              padding: const EdgeInsets.all(10),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Container(
                          width: MediaQuery.of(context).size.width,
                          height: 40,
                          decoration: BoxDecoration(
                            color: Colors.black,
                            borderRadius: BorderRadius.circular(15),
                          ),
                          child: Expanded(
                            child: Stack(
                              alignment: Alignment.centerRight,
                              children: <Widget>[
                                Padding(
                                  padding: const EdgeInsets.only(left: 8.0),
                                  child: TextField(
                                    style: const TextStyle(color: Colors.white),
                                    cursorColor: Colors.grey,
                                    controller: _controller,
                                    decoration: const InputDecoration(
                                      hintText: 'Add a comment',
                                      hintStyle: TextStyle(
                                        color: Colors.grey,
                                      ),
                                      border: InputBorder.none,
                                    ),
                                  ),
                                ),
                                IconButton(
                                  icon: const Icon(
                                    Icons.emoji_emotions_outlined,
                                    color: Colors.grey,
                                  ),
                                  onPressed: () {
                                    setState(() {
                                      emojiShowing = !emojiShowing;
                                    });
                                  },
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                      IconButton(
                        onPressed: () {
                          const snackBar = SnackBar(
                            content: Text('Send icon tapped'),
                          );
                          ScaffoldMessenger.of(context).showSnackBar(snackBar);
                        },
                        icon: const Icon(
                          Icons.send,
                          color: Colors.pink,
                        ),
                      )
                    ],
                  ),

                  // To file an ticket about these functionality
                  // Row(
                  //   children: const [
                  //     Padding(
                  //       padding: EdgeInsets.fromLTRB(8.0, 4.0, 4.0, 4.0),
                  //       child: Text(
                  //         'Aa',
                  //         style: TextStyle(color: Colors.white, fontSize: 20.0),
                  //       ),
                  //     ),
                  //     Padding(
                  //       padding: EdgeInsets.all(4.0),
                  //       child: Text(
                  //         'U',
                  //         style: TextStyle(color: Colors.white, fontSize: 20.0),
                  //       ),
                  //     ),
                  //     Padding(
                  //       padding: EdgeInsets.all(4.0),
                  //       child: Text(
                  //         '@',
                  //         style: TextStyle(color: Colors.white, fontSize: 20.0),
                  //       ),
                  //     ),
                  //     Padding(
                  //       padding: EdgeInsets.all(4.0),
                  //       child: Icon(
                  //         Icons.link,
                  //         color: Colors.white,
                  //       ),
                  //     ),
                  //     Spacer(),
                  //     Padding(
                  //       padding: EdgeInsets.all(8.0),
                  //       child: Icon(
                  //         Icons.file_copy,
                  //         color: Colors.white,
                  //       ),
                  //     ),
                  //     Icon(Icons.image, color: Colors.white)
                  //   ],
                  // ),
                  Offstage(
                    offstage: !emojiShowing,
                    child: SizedBox(
                      height: 250,
                      child: EmojiPicker(
                        onEmojiSelected: (Category category, Emoji emoji) {
                          _onEmojiSelected(emoji);
                        },
                        onBackspacePressed: _onBackspacePressed,
                        config: Config(
                          columns: 7,
                          emojiSizeMax: 32 * (Platform.isIOS ? 1.30 : 1.0),
                          verticalSpacing: 0,
                          horizontalSpacing: 0,
                          initCategory: Category.RECENT,
                          bgColor: Colors.white,
                          indicatorColor: Colors.blue,
                          iconColor: Colors.grey,
                          iconColorSelected: Colors.blue,
                          progressIndicatorColor: Colors.blue,
                          backspaceColor: Colors.blue,
                          skinToneDialogBgColor: Colors.white,
                          skinToneIndicatorColor: Colors.grey,
                          enableSkinTones: true,
                          showRecentsTab: true,
                          recentsLimit: 28,
                          noRecentsText: 'No Recents',
                          noRecentsStyle: const TextStyle(
                            fontSize: 20,
                            color: Colors.black26,
                          ),
                          tabIndicatorAnimDuration: kTabScrollDuration,
                          categoryIcons: const CategoryIcons(),
                          buttonMode: ButtonMode.MATERIAL,
                        ),
                      ),
                    ),
                  )
                ],
              ),
              decoration: mColors.BoxDecoration(
                color: Colors.grey[800],
                borderRadius: const mColors.BorderRadius.only(
                  topLeft: Radius.circular(16.0),
                  topRight: Radius.circular(16.0),
                  bottomLeft: mColors.Radius.zero,
                  bottomRight: mColors.Radius.zero,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

int hexOfRGBA(int r, int g, int b, {double opacity = 1}) {
  r = (r < 0) ? -r : r;
  g = (g < 0) ? -g : g;
  b = (b < 0) ? -b : b;
  opacity = (opacity < 0) ? -opacity : opacity;
  opacity = (opacity > 1) ? 255 : opacity * 255;
  r = (r > 255) ? 255 : r;
  g = (g > 255) ? 255 : g;
  b = (b > 255) ? 255 : b;
  int a = opacity.toInt();
  return int.parse(
    '0x${a.toRadixString(16)}${r.toRadixString(16)}${g.toRadixString(16)}${b.toRadixString(16)}',
  );
}
