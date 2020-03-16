import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'twitter';
  data = {
    "data": [
      {
        "created_at": "Mon Mar 09 17:09:20 +0000 2020",
        "id": 1237062930627203000,
        "id_str": "1237062930627203072",
        "text": "RT @ProperWhiskey: St. Patrick’s Week begins now #OneForAll https://t.co/DQIHa3Invv",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "OneForAll",
              "indices": [
                49,
                59
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                3,
                17
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 1237052251014860800,
              "id_str": "1237052251014860805",
              "indices": [
                60,
                83
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1237052251014860805/pu/img/yYKEKXMU7DMi3PG4.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1237052251014860805/pu/img/yYKEKXMU7DMi3PG4.jpg",
              "url": "https://t.co/DQIHa3Invv",
              "display_url": "pic.twitter.com/DQIHa3Invv",
              "expanded_url": "https://twitter.com/ProperWhiskey/status/1237052273559289857/video/1",
              "type": "photo",
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 453,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 720,
                  "h": 480,
                  "resize": "fit"
                },
                "large": {
                  "w": 720,
                  "h": 480,
                  "resize": "fit"
                }
              },
              "source_status_id": 1237052273559289900,
              "source_status_id_str": "1237052273559289857",
              "source_user_id": 1021404469584703500,
              "source_user_id_str": "1021404469584703488"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1237052251014860800,
              "id_str": "1237052251014860805",
              "indices": [
                60,
                83
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1237052251014860805/pu/img/yYKEKXMU7DMi3PG4.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1237052251014860805/pu/img/yYKEKXMU7DMi3PG4.jpg",
              "url": "https://t.co/DQIHa3Invv",
              "display_url": "pic.twitter.com/DQIHa3Invv",
              "expanded_url": "https://twitter.com/ProperWhiskey/status/1237052273559289857/video/1",
              "type": "video",
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 453,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 720,
                  "h": 480,
                  "resize": "fit"
                },
                "large": {
                  "w": 720,
                  "h": 480,
                  "resize": "fit"
                }
              },
              "source_status_id": 1237052273559289900,
              "source_status_id_str": "1237052273559289857",
              "source_user_id": 1021404469584703500,
              "source_user_id_str": "1021404469584703488",
              "video_info": {
                "aspect_ratio": [
                  3,
                  2
                ],
                "duration_millis": 15061,
                "variants": [
                  {
                    "bitrate": 832000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1237052251014860805/pu/vid/540x360/YP2llMevnd9s4Kdt.mp4?tag=10"
                  },
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/ext_tw_video/1237052251014860805/pu/pl/z9xh64xPjy9c1-Zc.m3u8?tag=10"
                  },
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1237052251014860805/pu/vid/404x270/3gNUSwvwvHCiZTZO.mp4?tag=10"
                  },
                  {
                    "bitrate": 2176000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1237052251014860805/pu/vid/720x480/6vvDvIIOQMi8NJxS.mp4?tag=10"
                  }
                ]
              },
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "id": 1021404469584703500,
                  "id_str": "1021404469584703488",
                  "name": "Proper No. Twelve",
                  "screen_name": "ProperWhiskey",
                  "location": "",
                  "description": "Irish Whiskey from Conor McGregor Must be of legal drinking age to follow Drink Properly Drink Responsibly #PRPR12 #OneForAll",
                  "url": "https://t.co/30z6eN3q6B",
                  "entities": {
                    "url": {
                      "urls": [
                        {
                          "url": "https://t.co/30z6eN3q6B",
                          "expanded_url": "http://ProperWhiskey.com",
                          "display_url": "ProperWhiskey.com",
                          "indices": [
                            0,
                            23
                          ]
                        }
                      ]
                    },
                    "description": {
                      "urls": []
                    }
                  },
                  "protected": false,
                  "followers_count": 81525,
                  "friends_count": 1,
                  "listed_count": 46,
                  "created_at": "Mon Jul 23 14:39:37 +0000 2018",
                  "favourites_count": 143,
                  "utc_offset": null,
                  "time_zone": null,
                  "geo_enabled": false,
                  "verified": true,
                  "statuses_count": 374,
                  "lang": null,
                  "contributors_enabled": false,
                  "is_translator": false,
                  "is_translation_enabled": false,
                  "profile_background_color": "000000",
                  "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                  "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                  "profile_background_tile": false,
                  "profile_image_url": "http://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/1021404469584703488/1537190817",
                  "profile_link_color": "B49660",
                  "profile_sidebar_border_color": "000000",
                  "profile_sidebar_fill_color": "000000",
                  "profile_text_color": "000000",
                  "profile_use_background_image": false,
                  "has_extended_profile": false,
                  "default_profile": false,
                  "default_profile_image": false,
                  "following": false,
                  "follow_request_sent": false,
                  "notifications": false,
                  "translator_type": "none"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Mon Mar 09 16:26:59 +0000 2020",
          "id": 1237052273559289900,
          "id_str": "1237052273559289857",
          "text": "St. Patrick’s Week begins now #OneForAll https://t.co/DQIHa3Invv",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "OneForAll",
                "indices": [
                  30,
                  40
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
              {
                "id": 1237052251014860800,
                "id_str": "1237052251014860805",
                "indices": [
                  41,
                  64
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1237052251014860805/pu/img/yYKEKXMU7DMi3PG4.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1237052251014860805/pu/img/yYKEKXMU7DMi3PG4.jpg",
                "url": "https://t.co/DQIHa3Invv",
                "display_url": "pic.twitter.com/DQIHa3Invv",
                "expanded_url": "https://twitter.com/ProperWhiskey/status/1237052273559289857/video/1",
                "type": "photo",
                "sizes": {
                  "small": {
                    "w": 680,
                    "h": 453,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 720,
                    "h": 480,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 720,
                    "h": 480,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1237052251014860800,
                "id_str": "1237052251014860805",
                "indices": [
                  41,
                  64
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1237052251014860805/pu/img/yYKEKXMU7DMi3PG4.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1237052251014860805/pu/img/yYKEKXMU7DMi3PG4.jpg",
                "url": "https://t.co/DQIHa3Invv",
                "display_url": "pic.twitter.com/DQIHa3Invv",
                "expanded_url": "https://twitter.com/ProperWhiskey/status/1237052273559289857/video/1",
                "type": "video",
                "sizes": {
                  "small": {
                    "w": 680,
                    "h": 453,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 720,
                    "h": 480,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 720,
                    "h": 480,
                    "resize": "fit"
                  }
                },
                "video_info": {
                  "aspect_ratio": [
                    3,
                    2
                  ],
                  "duration_millis": 15061,
                  "variants": [
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1237052251014860805/pu/vid/540x360/YP2llMevnd9s4Kdt.mp4?tag=10"
                    },
                    {
                      "content_type": "application/x-mpegURL",
                      "url": "https://video.twimg.com/ext_tw_video/1237052251014860805/pu/pl/z9xh64xPjy9c1-Zc.m3u8?tag=10"
                    },
                    {
                      "bitrate": 256000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1237052251014860805/pu/vid/404x270/3gNUSwvwvHCiZTZO.mp4?tag=10"
                    },
                    {
                      "bitrate": 2176000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1237052251014860805/pu/vid/720x480/6vvDvIIOQMi8NJxS.mp4?tag=10"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 1021404469584703500,
            "id_str": "1021404469584703488",
            "name": "Proper No. Twelve",
            "screen_name": "ProperWhiskey",
            "location": "",
            "description": "Irish Whiskey from Conor McGregor Must be of legal drinking age to follow Drink Properly Drink Responsibly #PRPR12 #OneForAll",
            "url": "https://t.co/30z6eN3q6B",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/30z6eN3q6B",
                    "expanded_url": "http://ProperWhiskey.com",
                    "display_url": "ProperWhiskey.com",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 81525,
            "friends_count": 1,
            "listed_count": 46,
            "created_at": "Mon Jul 23 14:39:37 +0000 2018",
            "favourites_count": 143,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 374,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1021404469584703488/1537190817",
            "profile_link_color": "B49660",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 294,
          "favorite_count": 2319,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 294,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Mon Mar 09 02:42:14 +0000 2020",
        "id": 1236844714550349800,
        "id_str": "1236844714550349829",
        "text": "I save my hugs for postfight ❤️ https://t.co/KuFuZQ9BE5",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [],
          "media": [
            {
              "id": 1236844697534050300,
              "id_str": "1236844697534050310",
              "indices": [
                32,
                55
              ],
              "media_url": "http://pbs.twimg.com/media/ESonswbXsAYWb2D.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ESonswbXsAYWb2D.jpg",
              "url": "https://t.co/KuFuZQ9BE5",
              "display_url": "pic.twitter.com/KuFuZQ9BE5",
              "expanded_url": "https://twitter.com/TheNotoriousMMA/status/1236844714550349829/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 560,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 988,
                  "h": 1200,
                  "resize": "fit"
                },
                "large": {
                  "w": 1242,
                  "h": 1509,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1236844697534050300,
              "id_str": "1236844697534050310",
              "indices": [
                32,
                55
              ],
              "media_url": "http://pbs.twimg.com/media/ESonswbXsAYWb2D.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ESonswbXsAYWb2D.jpg",
              "url": "https://t.co/KuFuZQ9BE5",
              "display_url": "pic.twitter.com/KuFuZQ9BE5",
              "expanded_url": "https://twitter.com/TheNotoriousMMA/status/1236844714550349829/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 560,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 988,
                  "h": 1200,
                  "resize": "fit"
                },
                "large": {
                  "w": 1242,
                  "h": 1509,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 2108,
        "favorite_count": 32872,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Sun Mar 08 23:21:47 +0000 2020",
        "id": 1236794270633336800,
        "id_str": "1236794270633336832",
        "text": "Hahah brilliant. The gloves 😂 https://t.co/urT2V0VCJU",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/urT2V0VCJU",
              "expanded_url": "https://twitter.com/JasonFi00457795/status/1236793080638066688",
              "display_url": "twitter.com/JasonFi0045779…",
              "indices": [
                30,
                53
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1236793080638066700,
        "quoted_status_id_str": "1236793080638066688",
        "quoted_status": {
          "created_at": "Sun Mar 08 23:17:03 +0000 2020",
          "id": 1236793080638066700,
          "id_str": "1236793080638066688",
          "text": "@TheNotoriousMMA  up the irish https://t.co/22zL7Pzh15",
          "truncated": false,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  0,
                  16
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1236793078155001900,
                "id_str": "1236793078155001857",
                "indices": [
                  31,
                  54
                ],
                "media_url": "http://pbs.twimg.com/media/ESn4wHQXQAEDEeA.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ESn4wHQXQAEDEeA.jpg",
                "url": "https://t.co/22zL7Pzh15",
                "display_url": "pic.twitter.com/22zL7Pzh15",
                "expanded_url": "https://twitter.com/JasonFi00457795/status/1236793080638066688/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 720,
                    "h": 516,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 487,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 720,
                    "h": 516,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1236793078155001900,
                "id_str": "1236793078155001857",
                "indices": [
                  31,
                  54
                ],
                "media_url": "http://pbs.twimg.com/media/ESn4wHQXQAEDEeA.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ESn4wHQXQAEDEeA.jpg",
                "url": "https://t.co/22zL7Pzh15",
                "display_url": "pic.twitter.com/22zL7Pzh15",
                "expanded_url": "https://twitter.com/JasonFi00457795/status/1236793080638066688/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 720,
                    "h": 516,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 487,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 720,
                    "h": 516,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": 369583954,
          "in_reply_to_user_id_str": "369583954",
          "in_reply_to_screen_name": "TheNotoriousMMA",
          "user": {
            "id": 1236784644961566700,
            "id_str": "1236784644961566721",
            "name": "Jason Field",
            "screen_name": "JasonFi00457795",
            "location": "",
            "description": "Nobody is special",
            "url": null,
            "entities": {
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 9,
            "friends_count": 13,
            "listed_count": 1,
            "created_at": "Sun Mar 08 22:43:42 +0000 2020",
            "favourites_count": 7,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 2,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1236784983760613376/NKjYfDi7_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1236784983760613376/NKjYfDi7_normal.jpg",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 46,
          "favorite_count": 922,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "retweet_count": 644,
        "favorite_count": 16231,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Sun Mar 08 19:05:04 +0000 2020",
        "id": 1236729668172161000,
        "id_str": "1236729668172161024",
        "text": "@britton_kai More active. More accurate. More damaging shots landed. What more do you need? Amazing fight! Zhang is… https://t.co/wSgFcEXEqy",
        "truncated": true,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "britton_kai",
              "name": "@Peaky_$1¥deR (AB) 🖕🏴󠁧󠁢󠁥󠁮󠁧󠁿🖕",
              "id": 3358855181,
              "id_str": "3358855181",
              "indices": [
                0,
                12
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/wSgFcEXEqy",
              "expanded_url": "https://twitter.com/i/web/status/1236729668172161024",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                117,
                140
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": 1236728952326180900,
        "in_reply_to_status_id_str": "1236728952326180864",
        "in_reply_to_user_id": 3358855181,
        "in_reply_to_user_id_str": "3358855181",
        "in_reply_to_screen_name": "britton_kai",
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 43,
        "favorite_count": 501,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      {
        "created_at": "Sun Mar 08 18:55:43 +0000 2020",
        "id": 1236727312277700600,
        "id_str": "1236727312277700611",
        "text": "Amazing contest! Wrong decision. https://t.co/1o0o9cLHUz",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/1o0o9cLHUz",
              "expanded_url": "https://twitter.com/ufc/status/1236700600936435713",
              "display_url": "twitter.com/ufc/status/123…",
              "indices": [
                33,
                56
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1236700600936435700,
        "quoted_status_id_str": "1236700600936435713",
        "quoted_status": {
          "created_at": "Sun Mar 08 17:09:34 +0000 2020",
          "id": 1236700600936435700,
          "id_str": "1236700600936435713",
          "text": "O̶n̶e̶ ̶o̶f̶ ̶t̶h̶e̶ ̶g̶r̶e̶a̶t̶e̶s̶t̶ ̶f̶i̶g̶h̶t̶s̶ ̶i̶n̶ ̶w̶o̶m̶e̶n̶'s̶ ̶M̶M̶A̶ ̶h̶i̶s̶t̶o̶r̶y̶\n\nOne of the great… https://t.co/zycCPgfcjb",
          "truncated": true,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/zycCPgfcjb",
                "expanded_url": "https://twitter.com/i/web/status/1236700600936435713",
                "display_url": "twitter.com/i/web/status/1…",
                "indices": [
                  117,
                  140
                ]
              }
            ]
          },
          "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 6446742,
            "id_str": "6446742",
            "name": "UFC",
            "screen_name": "ufc",
            "location": "Worldwide",
            "description": "#UFCBrasilia: Lee vs Oliveira - Saturday, Mar. 14 - LIVE on ESPN+ & @ESPN",
            "url": "https://t.co/NqXFtgoo9Z",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/NqXFtgoo9Z",
                    "expanded_url": "http://linktr.ee/UFCSOCIAL",
                    "display_url": "linktr.ee/UFCSOCIAL",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 7474443,
            "friends_count": 15189,
            "listed_count": 14665,
            "created_at": "Wed May 30 16:11:00 +0000 2007",
            "favourites_count": 18846,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 102102,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/6446742/1583772384",
            "profile_link_color": "D91111",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "FAF5F5",
            "profile_text_color": "0F0F0F",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 6719,
          "favorite_count": 39597,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "es"
        },
        "retweet_count": 3991,
        "favorite_count": 44415,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Sun Mar 08 18:55:17 +0000 2020",
        "id": 1236727204819669000,
        "id_str": "1236727204819668993",
        "text": "RT @mmaballer13_: \"Who you know fresher then @TheNotoriousMMA ,riddle me that\" https://t.co/YMjRxl0va7",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "mmaballer13_",
              "name": "Chris",
              "id": 921907950557397000,
              "id_str": "921907950557396992",
              "indices": [
                3,
                16
              ]
            },
            {
              "screen_name": "TheNotoriousMMA",
              "name": "Conor McGregor",
              "id": 369583954,
              "id_str": "369583954",
              "indices": [
                45,
                61
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 1236672577763831800,
              "id_str": "1236672577763831808",
              "indices": [
                79,
                102
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1236672577763831808/pu/img/Za0GJv9Lu3CW__XA.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1236672577763831808/pu/img/Za0GJv9Lu3CW__XA.jpg",
              "url": "https://t.co/YMjRxl0va7",
              "display_url": "pic.twitter.com/YMjRxl0va7",
              "expanded_url": "https://twitter.com/mmaballer13_/status/1236672799982247941/video/1",
              "type": "photo",
              "sizes": {
                "large": {
                  "w": 480,
                  "h": 852,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 383,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 480,
                  "h": 852,
                  "resize": "fit"
                }
              },
              "source_status_id": 1236672799982248000,
              "source_status_id_str": "1236672799982247941",
              "source_user_id": 921907950557397000,
              "source_user_id_str": "921907950557396992"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1236672577763831800,
              "id_str": "1236672577763831808",
              "indices": [
                79,
                102
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1236672577763831808/pu/img/Za0GJv9Lu3CW__XA.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1236672577763831808/pu/img/Za0GJv9Lu3CW__XA.jpg",
              "url": "https://t.co/YMjRxl0va7",
              "display_url": "pic.twitter.com/YMjRxl0va7",
              "expanded_url": "https://twitter.com/mmaballer13_/status/1236672799982247941/video/1",
              "type": "video",
              "sizes": {
                "large": {
                  "w": 480,
                  "h": 852,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 383,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 480,
                  "h": 852,
                  "resize": "fit"
                }
              },
              "source_status_id": 1236672799982248000,
              "source_status_id_str": "1236672799982247941",
              "source_user_id": 921907950557397000,
              "source_user_id_str": "921907950557396992",
              "video_info": {
                "aspect_ratio": [
                  40,
                  71
                ],
                "duration_millis": 11400,
                "variants": [
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/ext_tw_video/1236672577763831808/pu/pl/e4bR4BIvwRkCKSph.m3u8?tag=10"
                  },
                  {
                    "bitrate": 832000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1236672577763831808/pu/vid/360x638/Z6JecqvjumfNzT5S.mp4?tag=10"
                  },
                  {
                    "bitrate": 2176000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1236672577763831808/pu/vid/480x852/eUQzYcFsV5VuXC8J.mp4?tag=10"
                  },
                  {
                    "bitrate": 632000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1236672577763831808/pu/vid/320x568/vjFlIRUgxdp5CX9Y.mp4?tag=10"
                  }
                ]
              },
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "id": 921907950557397000,
                  "id_str": "921907950557396992",
                  "name": "Chris",
                  "screen_name": "mmaballer13_",
                  "location": "",
                  "description": "",
                  "url": null,
                  "entities": {
                    "description": {
                      "urls": []
                    }
                  },
                  "protected": false,
                  "followers_count": 1589,
                  "friends_count": 45,
                  "listed_count": 10,
                  "created_at": "Sun Oct 22 01:15:58 +0000 2017",
                  "favourites_count": 10581,
                  "utc_offset": null,
                  "time_zone": null,
                  "geo_enabled": false,
                  "verified": false,
                  "statuses_count": 12896,
                  "lang": null,
                  "contributors_enabled": false,
                  "is_translator": false,
                  "is_translation_enabled": false,
                  "profile_background_color": "F5F8FA",
                  "profile_background_image_url": null,
                  "profile_background_image_url_https": null,
                  "profile_background_tile": false,
                  "profile_image_url": "http://pbs.twimg.com/profile_images/921911959405998080/dK1jHrUD_normal.jpg",
                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/921911959405998080/dK1jHrUD_normal.jpg",
                  "profile_link_color": "1DA1F2",
                  "profile_sidebar_border_color": "C0DEED",
                  "profile_sidebar_fill_color": "DDEEF6",
                  "profile_text_color": "333333",
                  "profile_use_background_image": true,
                  "has_extended_profile": false,
                  "default_profile": true,
                  "default_profile_image": false,
                  "following": false,
                  "follow_request_sent": false,
                  "notifications": false,
                  "translator_type": "none"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sun Mar 08 15:19:06 +0000 2020",
          "id": 1236672799982248000,
          "id_str": "1236672799982247941",
          "text": "\"Who you know fresher then @TheNotoriousMMA ,riddle me that\" https://t.co/YMjRxl0va7",
          "truncated": false,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  27,
                  43
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1236672577763831800,
                "id_str": "1236672577763831808",
                "indices": [
                  61,
                  84
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1236672577763831808/pu/img/Za0GJv9Lu3CW__XA.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1236672577763831808/pu/img/Za0GJv9Lu3CW__XA.jpg",
                "url": "https://t.co/YMjRxl0va7",
                "display_url": "pic.twitter.com/YMjRxl0va7",
                "expanded_url": "https://twitter.com/mmaballer13_/status/1236672799982247941/video/1",
                "type": "photo",
                "sizes": {
                  "large": {
                    "w": 480,
                    "h": 852,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 383,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 480,
                    "h": 852,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1236672577763831800,
                "id_str": "1236672577763831808",
                "indices": [
                  61,
                  84
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1236672577763831808/pu/img/Za0GJv9Lu3CW__XA.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1236672577763831808/pu/img/Za0GJv9Lu3CW__XA.jpg",
                "url": "https://t.co/YMjRxl0va7",
                "display_url": "pic.twitter.com/YMjRxl0va7",
                "expanded_url": "https://twitter.com/mmaballer13_/status/1236672799982247941/video/1",
                "type": "video",
                "sizes": {
                  "large": {
                    "w": 480,
                    "h": 852,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 383,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 480,
                    "h": 852,
                    "resize": "fit"
                  }
                },
                "video_info": {
                  "aspect_ratio": [
                    40,
                    71
                  ],
                  "duration_millis": 11400,
                  "variants": [
                    {
                      "content_type": "application/x-mpegURL",
                      "url": "https://video.twimg.com/ext_tw_video/1236672577763831808/pu/pl/e4bR4BIvwRkCKSph.m3u8?tag=10"
                    },
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1236672577763831808/pu/vid/360x638/Z6JecqvjumfNzT5S.mp4?tag=10"
                    },
                    {
                      "bitrate": 2176000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1236672577763831808/pu/vid/480x852/eUQzYcFsV5VuXC8J.mp4?tag=10"
                    },
                    {
                      "bitrate": 632000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1236672577763831808/pu/vid/320x568/vjFlIRUgxdp5CX9Y.mp4?tag=10"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 921907950557397000,
            "id_str": "921907950557396992",
            "name": "Chris",
            "screen_name": "mmaballer13_",
            "location": "",
            "description": "",
            "url": null,
            "entities": {
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 1589,
            "friends_count": 45,
            "listed_count": 10,
            "created_at": "Sun Oct 22 01:15:58 +0000 2017",
            "favourites_count": 10581,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 12896,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/921911959405998080/dK1jHrUD_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/921911959405998080/dK1jHrUD_normal.jpg",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 551,
          "favorite_count": 6682,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 551,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Sat Mar 07 21:52:00 +0000 2020",
        "id": 1236409287951483000,
        "id_str": "1236409287951482880",
        "text": "RT @ProperWhiskey: You all asked, we listened. Now you can have our limited edition Sportiqe Paddys bomber jacket! Follow @properwhiskey on…",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                3,
                17
              ]
            },
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                122,
                136
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sat Mar 07 17:32:40 +0000 2020",
          "id": 1236344025378144300,
          "id_str": "1236344025378144259",
          "text": "You all asked, we listened. Now you can have our limited edition Sportiqe Paddys bomber jacket! Follow… https://t.co/wn33t0RrJe",
          "truncated": true,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/wn33t0RrJe",
                "expanded_url": "https://twitter.com/i/web/status/1236344025378144259",
                "display_url": "twitter.com/i/web/status/1…",
                "indices": [
                  104,
                  127
                ]
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 1021404469584703500,
            "id_str": "1021404469584703488",
            "name": "Proper No. Twelve",
            "screen_name": "ProperWhiskey",
            "location": "",
            "description": "Irish Whiskey from Conor McGregor Must be of legal drinking age to follow Drink Properly Drink Responsibly #PRPR12 #OneForAll",
            "url": "https://t.co/30z6eN3q6B",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/30z6eN3q6B",
                    "expanded_url": "http://ProperWhiskey.com",
                    "display_url": "ProperWhiskey.com",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 81525,
            "friends_count": 1,
            "listed_count": 46,
            "created_at": "Mon Jul 23 14:39:37 +0000 2018",
            "favourites_count": 143,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 374,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1021404469584703488/1537190817",
            "profile_link_color": "B49660",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 136,
          "favorite_count": 1407,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 136,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      {
        "created_at": "Fri Mar 06 20:13:14 +0000 2020",
        "id": 1236022045105885200,
        "id_str": "1236022045105885186",
        "text": "RT @ProperWhiskey: Start celebrating St. Patrick’s Day this weekend with the Crumlin Cider #OneForAll https://t.co/8Uyy0dIgNk",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "OneForAll",
              "indices": [
                91,
                101
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                3,
                17
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 1235978494083022800,
              "id_str": "1235978494083022848",
              "indices": [
                102,
                125
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1235978494083022848/pu/img/NC3RPKZJFTRzlK0M.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1235978494083022848/pu/img/NC3RPKZJFTRzlK0M.jpg",
              "url": "https://t.co/8Uyy0dIgNk",
              "display_url": "pic.twitter.com/8Uyy0dIgNk",
              "expanded_url": "https://twitter.com/ProperWhiskey/status/1235978533190725632/video/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 768,
                  "h": 960,
                  "resize": "fit"
                },
                "small": {
                  "w": 544,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 768,
                  "h": 960,
                  "resize": "fit"
                }
              },
              "source_status_id": 1235978533190725600,
              "source_status_id_str": "1235978533190725632",
              "source_user_id": 1021404469584703500,
              "source_user_id_str": "1021404469584703488"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1235978494083022800,
              "id_str": "1235978494083022848",
              "indices": [
                102,
                125
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1235978494083022848/pu/img/NC3RPKZJFTRzlK0M.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1235978494083022848/pu/img/NC3RPKZJFTRzlK0M.jpg",
              "url": "https://t.co/8Uyy0dIgNk",
              "display_url": "pic.twitter.com/8Uyy0dIgNk",
              "expanded_url": "https://twitter.com/ProperWhiskey/status/1235978533190725632/video/1",
              "type": "video",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 768,
                  "h": 960,
                  "resize": "fit"
                },
                "small": {
                  "w": 544,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 768,
                  "h": 960,
                  "resize": "fit"
                }
              },
              "source_status_id": 1235978533190725600,
              "source_status_id_str": "1235978533190725632",
              "source_user_id": 1021404469584703500,
              "source_user_id_str": "1021404469584703488",
              "video_info": {
                "aspect_ratio": [
                  4,
                  5
                ],
                "duration_millis": 17000,
                "variants": [
                  {
                    "bitrate": 832000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1235978494083022848/pu/vid/360x450/B59MkhZytzfxNWyR.mp4?tag=10"
                  },
                  {
                    "bitrate": 632000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1235978494083022848/pu/vid/320x400/1f7FtRORwwkbXtmk.mp4?tag=10"
                  },
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/ext_tw_video/1235978494083022848/pu/pl/wM2MnILiWE3ZF_4a.m3u8?tag=10"
                  },
                  {
                    "bitrate": 2176000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1235978494083022848/pu/vid/720x900/0IF4IkJZqANCwc9E.mp4?tag=10"
                  }
                ]
              },
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "id": 1021404469584703500,
                  "id_str": "1021404469584703488",
                  "name": "Proper No. Twelve",
                  "screen_name": "ProperWhiskey",
                  "location": "",
                  "description": "Irish Whiskey from Conor McGregor Must be of legal drinking age to follow Drink Properly Drink Responsibly #PRPR12 #OneForAll",
                  "url": "https://t.co/30z6eN3q6B",
                  "entities": {
                    "url": {
                      "urls": [
                        {
                          "url": "https://t.co/30z6eN3q6B",
                          "expanded_url": "http://ProperWhiskey.com",
                          "display_url": "ProperWhiskey.com",
                          "indices": [
                            0,
                            23
                          ]
                        }
                      ]
                    },
                    "description": {
                      "urls": []
                    }
                  },
                  "protected": false,
                  "followers_count": 81525,
                  "friends_count": 1,
                  "listed_count": 46,
                  "created_at": "Mon Jul 23 14:39:37 +0000 2018",
                  "favourites_count": 143,
                  "utc_offset": null,
                  "time_zone": null,
                  "geo_enabled": false,
                  "verified": true,
                  "statuses_count": 374,
                  "lang": null,
                  "contributors_enabled": false,
                  "is_translator": false,
                  "is_translation_enabled": false,
                  "profile_background_color": "000000",
                  "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                  "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                  "profile_background_tile": false,
                  "profile_image_url": "http://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/1021404469584703488/1537190817",
                  "profile_link_color": "B49660",
                  "profile_sidebar_border_color": "000000",
                  "profile_sidebar_fill_color": "000000",
                  "profile_text_color": "000000",
                  "profile_use_background_image": false,
                  "has_extended_profile": false,
                  "default_profile": false,
                  "default_profile_image": false,
                  "following": false,
                  "follow_request_sent": false,
                  "notifications": false,
                  "translator_type": "none"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Fri Mar 06 17:20:20 +0000 2020",
          "id": 1235978533190725600,
          "id_str": "1235978533190725632",
          "text": "Start celebrating St. Patrick’s Day this weekend with the Crumlin Cider #OneForAll https://t.co/8Uyy0dIgNk",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "OneForAll",
                "indices": [
                  72,
                  82
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
              {
                "id": 1235978494083022800,
                "id_str": "1235978494083022848",
                "indices": [
                  83,
                  106
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1235978494083022848/pu/img/NC3RPKZJFTRzlK0M.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1235978494083022848/pu/img/NC3RPKZJFTRzlK0M.jpg",
                "url": "https://t.co/8Uyy0dIgNk",
                "display_url": "pic.twitter.com/8Uyy0dIgNk",
                "expanded_url": "https://twitter.com/ProperWhiskey/status/1235978533190725632/video/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 768,
                    "h": 960,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 544,
                    "h": 680,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 768,
                    "h": 960,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1235978494083022800,
                "id_str": "1235978494083022848",
                "indices": [
                  83,
                  106
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1235978494083022848/pu/img/NC3RPKZJFTRzlK0M.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1235978494083022848/pu/img/NC3RPKZJFTRzlK0M.jpg",
                "url": "https://t.co/8Uyy0dIgNk",
                "display_url": "pic.twitter.com/8Uyy0dIgNk",
                "expanded_url": "https://twitter.com/ProperWhiskey/status/1235978533190725632/video/1",
                "type": "video",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 768,
                    "h": 960,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 544,
                    "h": 680,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 768,
                    "h": 960,
                    "resize": "fit"
                  }
                },
                "video_info": {
                  "aspect_ratio": [
                    4,
                    5
                  ],
                  "duration_millis": 17000,
                  "variants": [
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1235978494083022848/pu/vid/360x450/B59MkhZytzfxNWyR.mp4?tag=10"
                    },
                    {
                      "bitrate": 632000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1235978494083022848/pu/vid/320x400/1f7FtRORwwkbXtmk.mp4?tag=10"
                    },
                    {
                      "content_type": "application/x-mpegURL",
                      "url": "https://video.twimg.com/ext_tw_video/1235978494083022848/pu/pl/wM2MnILiWE3ZF_4a.m3u8?tag=10"
                    },
                    {
                      "bitrate": 2176000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1235978494083022848/pu/vid/720x900/0IF4IkJZqANCwc9E.mp4?tag=10"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 1021404469584703500,
            "id_str": "1021404469584703488",
            "name": "Proper No. Twelve",
            "screen_name": "ProperWhiskey",
            "location": "",
            "description": "Irish Whiskey from Conor McGregor Must be of legal drinking age to follow Drink Properly Drink Responsibly #PRPR12 #OneForAll",
            "url": "https://t.co/30z6eN3q6B",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/30z6eN3q6B",
                    "expanded_url": "http://ProperWhiskey.com",
                    "display_url": "ProperWhiskey.com",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 81525,
            "friends_count": 1,
            "listed_count": 46,
            "created_at": "Mon Jul 23 14:39:37 +0000 2018",
            "favourites_count": 143,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 374,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1021404469584703488/1537190817",
            "profile_link_color": "B49660",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 124,
          "favorite_count": 1078,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 124,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Wed Mar 04 20:52:21 +0000 2020",
        "id": 1235307112810664000,
        "id_str": "1235307112810663937",
        "text": "RT @_maniacflame_: Family @TheNotoriousMMA 💯 WE READY FOR THE NEXT FIGHT CHAMP‼️ #mcgregorwalk https://t.co/Cs1rl4qZWt",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "mcgregorwalk",
              "indices": [
                81,
                94
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "_maniacflame_",
              "name": "Maniac Flame🔥",
              "id": 2855929081,
              "id_str": "2855929081",
              "indices": [
                3,
                17
              ]
            },
            {
              "screen_name": "TheNotoriousMMA",
              "name": "Conor McGregor",
              "id": 369583954,
              "id_str": "369583954",
              "indices": [
                26,
                42
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 1235297528846966800,
              "id_str": "1235297528846966785",
              "indices": [
                95,
                118
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1235297528846966785/pu/img/Gq_I9vlV_6rSq27J.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1235297528846966785/pu/img/Gq_I9vlV_6rSq27J.jpg",
              "url": "https://t.co/Cs1rl4qZWt",
              "display_url": "pic.twitter.com/Cs1rl4qZWt",
              "expanded_url": "https://twitter.com/_maniacflame_/status/1235297571284889602/video/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 680,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 720,
                  "h": 720,
                  "resize": "fit"
                },
                "large": {
                  "w": 720,
                  "h": 720,
                  "resize": "fit"
                }
              },
              "source_status_id": 1235297571284889600,
              "source_status_id_str": "1235297571284889602",
              "source_user_id": 2855929081,
              "source_user_id_str": "2855929081"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1235297528846966800,
              "id_str": "1235297528846966785",
              "indices": [
                95,
                118
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1235297528846966785/pu/img/Gq_I9vlV_6rSq27J.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1235297528846966785/pu/img/Gq_I9vlV_6rSq27J.jpg",
              "url": "https://t.co/Cs1rl4qZWt",
              "display_url": "pic.twitter.com/Cs1rl4qZWt",
              "expanded_url": "https://twitter.com/_maniacflame_/status/1235297571284889602/video/1",
              "type": "video",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 680,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 720,
                  "h": 720,
                  "resize": "fit"
                },
                "large": {
                  "w": 720,
                  "h": 720,
                  "resize": "fit"
                }
              },
              "source_status_id": 1235297571284889600,
              "source_status_id_str": "1235297571284889602",
              "source_user_id": 2855929081,
              "source_user_id_str": "2855929081",
              "video_info": {
                "aspect_ratio": [
                  1,
                  1
                ],
                "duration_millis": 4767,
                "variants": [
                  {
                    "bitrate": 1280000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1235297528846966785/pu/vid/720x720/YI7rij99Xg-5BVBw.mp4?tag=10"
                  },
                  {
                    "bitrate": 432000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1235297528846966785/pu/vid/320x320/ArIrjG13H-Mk_U4L.mp4?tag=10"
                  },
                  {
                    "bitrate": 832000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1235297528846966785/pu/vid/480x480/3ZNdmsauXhOClNnI.mp4?tag=10"
                  },
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/ext_tw_video/1235297528846966785/pu/pl/DHv8sbAEj0q6y_Wc.m3u8?tag=10"
                  }
                ]
              },
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "id": 2855929081,
                  "id_str": "2855929081",
                  "name": "Maniac Flame🔥",
                  "screen_name": "_maniacflame_",
                  "location": "cold world . warm moments .",
                  "description": "SERIOUS INQUIRES ONLY‼️mf@maniacflamegod.com",
                  "url": "https://t.co/BD0SVP5XP4",
                  "entities": {
                    "url": {
                      "urls": [
                        {
                          "url": "https://t.co/BD0SVP5XP4",
                          "expanded_url": "https://youtu.be/TT_3Bg8Nc8k",
                          "display_url": "youtu.be/TT_3Bg8Nc8k",
                          "indices": [
                            0,
                            23
                          ]
                        }
                      ]
                    },
                    "description": {
                      "urls": []
                    }
                  },
                  "protected": false,
                  "followers_count": 1227,
                  "friends_count": 1225,
                  "listed_count": 8,
                  "created_at": "Tue Oct 14 19:43:12 +0000 2014",
                  "favourites_count": 1579,
                  "utc_offset": null,
                  "time_zone": null,
                  "geo_enabled": false,
                  "verified": false,
                  "statuses_count": 10998,
                  "lang": null,
                  "contributors_enabled": false,
                  "is_translator": false,
                  "is_translation_enabled": false,
                  "profile_background_color": "C0DEED",
                  "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                  "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                  "profile_background_tile": false,
                  "profile_image_url": "http://pbs.twimg.com/profile_images/1224932600214515712/smA91k_S_normal.jpg",
                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1224932600214515712/smA91k_S_normal.jpg",
                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/2855929081/1581277246",
                  "profile_link_color": "1DA1F2",
                  "profile_sidebar_border_color": "C0DEED",
                  "profile_sidebar_fill_color": "DDEEF6",
                  "profile_text_color": "333333",
                  "profile_use_background_image": true,
                  "has_extended_profile": true,
                  "default_profile": true,
                  "default_profile_image": false,
                  "following": false,
                  "follow_request_sent": false,
                  "notifications": false,
                  "translator_type": "none"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Wed Mar 04 20:14:26 +0000 2020",
          "id": 1235297571284889600,
          "id_str": "1235297571284889602",
          "text": "Family @TheNotoriousMMA 💯 WE READY FOR THE NEXT FIGHT CHAMP‼️ #mcgregorwalk https://t.co/Cs1rl4qZWt",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "mcgregorwalk",
                "indices": [
                  62,
                  75
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  7,
                  23
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1235297528846966800,
                "id_str": "1235297528846966785",
                "indices": [
                  76,
                  99
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1235297528846966785/pu/img/Gq_I9vlV_6rSq27J.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1235297528846966785/pu/img/Gq_I9vlV_6rSq27J.jpg",
                "url": "https://t.co/Cs1rl4qZWt",
                "display_url": "pic.twitter.com/Cs1rl4qZWt",
                "expanded_url": "https://twitter.com/_maniacflame_/status/1235297571284889602/video/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 680,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 720,
                    "h": 720,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 720,
                    "h": 720,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1235297528846966800,
                "id_str": "1235297528846966785",
                "indices": [
                  76,
                  99
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1235297528846966785/pu/img/Gq_I9vlV_6rSq27J.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1235297528846966785/pu/img/Gq_I9vlV_6rSq27J.jpg",
                "url": "https://t.co/Cs1rl4qZWt",
                "display_url": "pic.twitter.com/Cs1rl4qZWt",
                "expanded_url": "https://twitter.com/_maniacflame_/status/1235297571284889602/video/1",
                "type": "video",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 680,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 720,
                    "h": 720,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 720,
                    "h": 720,
                    "resize": "fit"
                  }
                },
                "video_info": {
                  "aspect_ratio": [
                    1,
                    1
                  ],
                  "duration_millis": 4767,
                  "variants": [
                    {
                      "bitrate": 1280000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1235297528846966785/pu/vid/720x720/YI7rij99Xg-5BVBw.mp4?tag=10"
                    },
                    {
                      "bitrate": 432000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1235297528846966785/pu/vid/320x320/ArIrjG13H-Mk_U4L.mp4?tag=10"
                    },
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1235297528846966785/pu/vid/480x480/3ZNdmsauXhOClNnI.mp4?tag=10"
                    },
                    {
                      "content_type": "application/x-mpegURL",
                      "url": "https://video.twimg.com/ext_tw_video/1235297528846966785/pu/pl/DHv8sbAEj0q6y_Wc.m3u8?tag=10"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 2855929081,
            "id_str": "2855929081",
            "name": "Maniac Flame🔥",
            "screen_name": "_maniacflame_",
            "location": "cold world . warm moments .",
            "description": "SERIOUS INQUIRES ONLY‼️mf@maniacflamegod.com",
            "url": "https://t.co/BD0SVP5XP4",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/BD0SVP5XP4",
                    "expanded_url": "https://youtu.be/TT_3Bg8Nc8k",
                    "display_url": "youtu.be/TT_3Bg8Nc8k",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 1227,
            "friends_count": 1225,
            "listed_count": 8,
            "created_at": "Tue Oct 14 19:43:12 +0000 2014",
            "favourites_count": 1579,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 10998,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1224932600214515712/smA91k_S_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1224932600214515712/smA91k_S_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/2855929081/1581277246",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 254,
          "favorite_count": 3118,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 254,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Wed Mar 04 20:52:11 +0000 2020",
        "id": 1235307070196527000,
        "id_str": "1235307070196527104",
        "text": "RT @NibbsMcGregor: Proper shoes for my proper twelve.... 🐯 12on12 @TheNotoriousMMA @ProperWhiskey @Reebok @ReebokClassics #zigkinetica http…",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "zigkinetica",
              "indices": [
                122,
                134
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "NibbsMcGregor",
              "name": "Nibbs",
              "id": 933398767113556000,
              "id_str": "933398767113555977",
              "indices": [
                3,
                17
              ]
            },
            {
              "screen_name": "TheNotoriousMMA",
              "name": "Conor McGregor",
              "id": 369583954,
              "id_str": "369583954",
              "indices": [
                66,
                82
              ]
            },
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                83,
                97
              ]
            },
            {
              "screen_name": "Reebok",
              "name": "Reebok",
              "id": 21915474,
              "id_str": "21915474",
              "indices": [
                98,
                105
              ]
            },
            {
              "screen_name": "ReebokClassics",
              "name": "Reebok Classic",
              "id": 248831432,
              "id_str": "248831432",
              "indices": [
                106,
                121
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Wed Mar 04 20:17:22 +0000 2020",
          "id": 1235298311994822700,
          "id_str": "1235298311994822664",
          "text": "Proper shoes for my proper twelve.... 🐯 12on12 @TheNotoriousMMA @ProperWhiskey @Reebok @ReebokClassics #zigkinetica https://t.co/Sp22VZiTIB",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "zigkinetica",
                "indices": [
                  103,
                  115
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  47,
                  63
                ]
              },
              {
                "screen_name": "ProperWhiskey",
                "name": "Proper No. Twelve",
                "id": 1021404469584703500,
                "id_str": "1021404469584703488",
                "indices": [
                  64,
                  78
                ]
              },
              {
                "screen_name": "Reebok",
                "name": "Reebok",
                "id": 21915474,
                "id_str": "21915474",
                "indices": [
                  79,
                  86
                ]
              },
              {
                "screen_name": "ReebokClassics",
                "name": "Reebok Classic",
                "id": 248831432,
                "id_str": "248831432",
                "indices": [
                  87,
                  102
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1235298301152579600,
                "id_str": "1235298301152579584",
                "indices": [
                  116,
                  139
                ],
                "media_url": "http://pbs.twimg.com/media/ESSpQo_X0AAv6wP.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ESSpQo_X0AAv6wP.jpg",
                "url": "https://t.co/Sp22VZiTIB",
                "display_url": "pic.twitter.com/Sp22VZiTIB",
                "expanded_url": "https://twitter.com/NibbsMcGregor/status/1235298311994822664/photo/1",
                "type": "photo",
                "sizes": {
                  "large": {
                    "w": 2048,
                    "h": 1152,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1235298301152579600,
                "id_str": "1235298301152579584",
                "indices": [
                  116,
                  139
                ],
                "media_url": "http://pbs.twimg.com/media/ESSpQo_X0AAv6wP.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ESSpQo_X0AAv6wP.jpg",
                "url": "https://t.co/Sp22VZiTIB",
                "display_url": "pic.twitter.com/Sp22VZiTIB",
                "expanded_url": "https://twitter.com/NibbsMcGregor/status/1235298311994822664/photo/1",
                "type": "photo",
                "sizes": {
                  "large": {
                    "w": 2048,
                    "h": 1152,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 933398767113556000,
            "id_str": "933398767113555977",
            "name": "Nibbs",
            "screen_name": "NibbsMcGregor",
            "location": "",
            "description": "",
            "url": null,
            "entities": {
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 2,
            "friends_count": 32,
            "listed_count": 0,
            "created_at": "Wed Nov 22 18:16:22 +0000 2017",
            "favourites_count": 9,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 7,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1170108695839215616/O8t_bb3H_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1170108695839215616/O8t_bb3H_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/933398767113555977/1567810947",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 24,
          "favorite_count": 453,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 24,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      {
        "created_at": "Tue Mar 03 01:44:14 +0000 2020",
        "id": 1234655793561194500,
        "id_str": "1234655793561194502",
        "text": "RT @Brett_Craft54: @TheNotoriousMMA @ProperWhiskey  Not only is Conor my favorite fighter of all time now has my favorite whiskey of all ti…",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "Brett_Craft54",
              "name": "Brett Craft",
              "id": 2286290593,
              "id_str": "2286290593",
              "indices": [
                3,
                17
              ]
            },
            {
              "screen_name": "TheNotoriousMMA",
              "name": "Conor McGregor",
              "id": 369583954,
              "id_str": "369583954",
              "indices": [
                19,
                35
              ]
            },
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                36,
                50
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Tue Mar 03 01:30:20 +0000 2020",
          "id": 1234652294131699700,
          "id_str": "1234652294131699714",
          "text": "@TheNotoriousMMA @ProperWhiskey  Not only is Conor my favorite fighter of all time now has my favorite whiskey of a… https://t.co/FmPocS8qMr",
          "truncated": true,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  0,
                  16
                ]
              },
              {
                "screen_name": "ProperWhiskey",
                "name": "Proper No. Twelve",
                "id": 1021404469584703500,
                "id_str": "1021404469584703488",
                "indices": [
                  17,
                  31
                ]
              }
            ],
            "urls": [
              {
                "url": "https://t.co/FmPocS8qMr",
                "expanded_url": "https://twitter.com/i/web/status/1234652294131699714",
                "display_url": "twitter.com/i/web/status/1…",
                "indices": [
                  117,
                  140
                ]
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": 369583954,
          "in_reply_to_user_id_str": "369583954",
          "in_reply_to_screen_name": "TheNotoriousMMA",
          "user": {
            "id": 2286290593,
            "id_str": "2286290593",
            "name": "Brett Craft",
            "screen_name": "Brett_Craft54",
            "location": "",
            "description": "The Original Ginger",
            "url": null,
            "entities": {
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 597,
            "friends_count": 1201,
            "listed_count": 1,
            "created_at": "Sat Jan 11 08:03:33 +0000 2014",
            "favourites_count": 2368,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": false,
            "statuses_count": 3502,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1057002401817919491/QIJ0D7QQ_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1057002401817919491/QIJ0D7QQ_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/2286290593/1548180530",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 31,
          "favorite_count": 610,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 31,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      {
        "created_at": "Sat Feb 29 22:14:57 +0000 2020",
        "id": 1233878351015809000,
        "id_str": "1233878351015809025",
        "text": "RT @KiddRossMusic: Happy Saturday everyone!! Who’s getting intoxicated 🥴 tonight ⁉️ @TheNotoriousMMA #newmusic2020 #intoxicated https://t.c…",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "newmusic2020",
              "indices": [
                101,
                114
              ]
            },
            {
              "text": "intoxicated",
              "indices": [
                115,
                127
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "KiddRossMusic",
              "name": "ᴋɪᴅᴅ ʀᴏss",
              "id": 174203201,
              "id_str": "174203201",
              "indices": [
                3,
                17
              ]
            },
            {
              "screen_name": "TheNotoriousMMA",
              "name": "Conor McGregor",
              "id": 369583954,
              "id_str": "369583954",
              "indices": [
                84,
                100
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sat Feb 29 17:25:43 +0000 2020",
          "id": 1233805560723726300,
          "id_str": "1233805560723726336",
          "text": "Happy Saturday everyone!! Who’s getting intoxicated 🥴 tonight ⁉️ @TheNotoriousMMA #newmusic2020 #intoxicated https://t.co/Dt5STQchth",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "newmusic2020",
                "indices": [
                  82,
                  95
                ]
              },
              {
                "text": "intoxicated",
                "indices": [
                  96,
                  108
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  65,
                  81
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1233805408747368400,
                "id_str": "1233805408747368451",
                "indices": [
                  109,
                  132
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1233805408747368451/pu/img/qAdi4FJ0mLhLD_Lw.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1233805408747368451/pu/img/qAdi4FJ0mLhLD_Lw.jpg",
                "url": "https://t.co/Dt5STQchth",
                "display_url": "pic.twitter.com/Dt5STQchth",
                "expanded_url": "https://twitter.com/KiddRossMusic/status/1233805560723726336/video/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 680,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 720,
                    "h": 720,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 720,
                    "h": 720,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1233805408747368400,
                "id_str": "1233805408747368451",
                "indices": [
                  109,
                  132
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1233805408747368451/pu/img/qAdi4FJ0mLhLD_Lw.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1233805408747368451/pu/img/qAdi4FJ0mLhLD_Lw.jpg",
                "url": "https://t.co/Dt5STQchth",
                "display_url": "pic.twitter.com/Dt5STQchth",
                "expanded_url": "https://twitter.com/KiddRossMusic/status/1233805560723726336/video/1",
                "type": "video",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 680,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 720,
                    "h": 720,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 720,
                    "h": 720,
                    "resize": "fit"
                  }
                },
                "video_info": {
                  "aspect_ratio": [
                    1,
                    1
                  ],
                  "duration_millis": 17572,
                  "variants": [
                    {
                      "bitrate": 1280000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233805408747368451/pu/vid/720x720/qXWX2YXBUlkApuQ0.mp4?tag=10"
                    },
                    {
                      "bitrate": 432000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233805408747368451/pu/vid/320x320/m57xo5RxoQv9WYr_.mp4?tag=10"
                    },
                    {
                      "content_type": "application/x-mpegURL",
                      "url": "https://video.twimg.com/ext_tw_video/1233805408747368451/pu/pl/_tU28jspvJEc3Bqb.m3u8?tag=10"
                    },
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233805408747368451/pu/vid/480x480/MEMhDGUGnRefjQG2.mp4?tag=10"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 174203201,
            "id_str": "174203201",
            "name": "ᴋɪᴅᴅ ʀᴏss",
            "screen_name": "KiddRossMusic",
            "location": "Wherever the music is...",
            "description": "🇬🇧 Dirty House Music DJ/Producer/Songwriter. Travelling the world making people dance 🎧🎶",
            "url": "https://t.co/oOu7FBgbdc",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/oOu7FBgbdc",
                    "expanded_url": "https://youtu.be/mKbZgvGvVqA",
                    "display_url": "youtu.be/mKbZgvGvVqA",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 13868,
            "friends_count": 89,
            "listed_count": 46,
            "created_at": "Tue Aug 03 10:31:30 +0000 2010",
            "favourites_count": 1720,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": false,
            "statuses_count": 1785,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "EBC1C1",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1238597157269180416/8N12_Ra-_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1238597157269180416/8N12_Ra-_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/174203201/1522684656",
            "profile_link_color": "00B303",
            "profile_sidebar_border_color": "DDEBC1",
            "profile_sidebar_fill_color": "DCE3F5",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 600,
          "favorite_count": 5357,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 600,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      {
        "created_at": "Sat Feb 29 22:14:30 +0000 2020",
        "id": 1233878236309926000,
        "id_str": "1233878236309925888",
        "text": "RT @jamielpeters: @TheNotoriousMMA all twelve siblings are taking photos wth you and #propertwelve! https://t.co/Mtf47GbNyl",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "propertwelve",
              "indices": [
                85,
                98
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "jamielpeters",
              "name": "Jamie P. Sonneville",
              "id": 5470522,
              "id_str": "5470522",
              "indices": [
                3,
                16
              ]
            },
            {
              "screen_name": "TheNotoriousMMA",
              "name": "Conor McGregor",
              "id": 369583954,
              "id_str": "369583954",
              "indices": [
                18,
                34
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 1233821323207618600,
              "id_str": "1233821323207618560",
              "indices": [
                100,
                123
              ],
              "media_url": "http://pbs.twimg.com/media/ER9p9NYXsAACE64.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ER9p9NYXsAACE64.jpg",
              "url": "https://t.co/Mtf47GbNyl",
              "display_url": "pic.twitter.com/Mtf47GbNyl",
              "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233821387887988700,
              "source_status_id_str": "1233821387887988736",
              "source_user_id": 5470522,
              "source_user_id_str": "5470522"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1233821323207618600,
              "id_str": "1233821323207618560",
              "indices": [
                100,
                123
              ],
              "media_url": "http://pbs.twimg.com/media/ER9p9NYXsAACE64.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ER9p9NYXsAACE64.jpg",
              "url": "https://t.co/Mtf47GbNyl",
              "display_url": "pic.twitter.com/Mtf47GbNyl",
              "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233821387887988700,
              "source_status_id_str": "1233821387887988736",
              "source_user_id": 5470522,
              "source_user_id_str": "5470522"
            },
            {
              "id": 1233821335282966500,
              "id_str": "1233821335282966529",
              "indices": [
                100,
                123
              ],
              "media_url": "http://pbs.twimg.com/media/ER9p96XW4AEGda7.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ER9p96XW4AEGda7.jpg",
              "url": "https://t.co/Mtf47GbNyl",
              "display_url": "pic.twitter.com/Mtf47GbNyl",
              "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233821387887988700,
              "source_status_id_str": "1233821387887988736",
              "source_user_id": 5470522,
              "source_user_id_str": "5470522"
            },
            {
              "id": 1233821352370561000,
              "id_str": "1233821352370561031",
              "indices": [
                100,
                123
              ],
              "media_url": "http://pbs.twimg.com/media/ER9p-6BW4AcUiKk.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ER9p-6BW4AcUiKk.jpg",
              "url": "https://t.co/Mtf47GbNyl",
              "display_url": "pic.twitter.com/Mtf47GbNyl",
              "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233821387887988700,
              "source_status_id_str": "1233821387887988736",
              "source_user_id": 5470522,
              "source_user_id_str": "5470522"
            },
            {
              "id": 1233821372754911200,
              "id_str": "1233821372754911235",
              "indices": [
                100,
                123
              ],
              "media_url": "http://pbs.twimg.com/media/ER9qAF9XYAM0kNV.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ER9qAF9XYAM0kNV.jpg",
              "url": "https://t.co/Mtf47GbNyl",
              "display_url": "pic.twitter.com/Mtf47GbNyl",
              "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
              "type": "photo",
              "sizes": {
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233821387887988700,
              "source_status_id_str": "1233821387887988736",
              "source_user_id": 5470522,
              "source_user_id_str": "5470522"
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sat Feb 29 18:28:36 +0000 2020",
          "id": 1233821387887988700,
          "id_str": "1233821387887988736",
          "text": "@TheNotoriousMMA all twelve siblings are taking photos wth you and #propertwelve! https://t.co/Mtf47GbNyl",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "propertwelve",
                "indices": [
                  67,
                  80
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  0,
                  16
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1233821323207618600,
                "id_str": "1233821323207618560",
                "indices": [
                  82,
                  105
                ],
                "media_url": "http://pbs.twimg.com/media/ER9p9NYXsAACE64.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ER9p9NYXsAACE64.jpg",
                "url": "https://t.co/Mtf47GbNyl",
                "display_url": "pic.twitter.com/Mtf47GbNyl",
                "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1233821323207618600,
                "id_str": "1233821323207618560",
                "indices": [
                  82,
                  105
                ],
                "media_url": "http://pbs.twimg.com/media/ER9p9NYXsAACE64.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ER9p9NYXsAACE64.jpg",
                "url": "https://t.co/Mtf47GbNyl",
                "display_url": "pic.twitter.com/Mtf47GbNyl",
                "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  }
                }
              },
              {
                "id": 1233821335282966500,
                "id_str": "1233821335282966529",
                "indices": [
                  82,
                  105
                ],
                "media_url": "http://pbs.twimg.com/media/ER9p96XW4AEGda7.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ER9p96XW4AEGda7.jpg",
                "url": "https://t.co/Mtf47GbNyl",
                "display_url": "pic.twitter.com/Mtf47GbNyl",
                "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
                "type": "photo",
                "sizes": {
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  }
                }
              },
              {
                "id": 1233821352370561000,
                "id_str": "1233821352370561031",
                "indices": [
                  82,
                  105
                ],
                "media_url": "http://pbs.twimg.com/media/ER9p-6BW4AcUiKk.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ER9p-6BW4AcUiKk.jpg",
                "url": "https://t.co/Mtf47GbNyl",
                "display_url": "pic.twitter.com/Mtf47GbNyl",
                "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  }
                }
              },
              {
                "id": 1233821372754911200,
                "id_str": "1233821372754911235",
                "indices": [
                  82,
                  105
                ],
                "media_url": "http://pbs.twimg.com/media/ER9qAF9XYAM0kNV.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ER9qAF9XYAM0kNV.jpg",
                "url": "https://t.co/Mtf47GbNyl",
                "display_url": "pic.twitter.com/Mtf47GbNyl",
                "expanded_url": "https://twitter.com/jamielpeters/status/1233821387887988736/photo/1",
                "type": "photo",
                "sizes": {
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": 369583954,
          "in_reply_to_user_id_str": "369583954",
          "in_reply_to_screen_name": "TheNotoriousMMA",
          "user": {
            "id": 5470522,
            "id_str": "5470522",
            "name": "Jamie P. Sonneville",
            "screen_name": "jamielpeters",
            "location": "ÜT: 43.229552,-77.197923",
            "description": "Director of Technology at Newark Central School District. School Board President at Williamson. CEO of itClix. All tweets are my own.",
            "url": "https://t.co/bfivBeCXBN",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/bfivBeCXBN",
                    "expanded_url": "http://www.itclix.net",
                    "display_url": "itclix.net",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 931,
            "friends_count": 1429,
            "listed_count": 48,
            "created_at": "Tue Apr 24 16:53:43 +0000 2007",
            "favourites_count": 1632,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": false,
            "statuses_count": 5678,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "131516",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/744966177739382788/nvnfsp4Z_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/744966177739382788/nvnfsp4Z_normal.jpg",
            "profile_link_color": "009999",
            "profile_sidebar_border_color": "EEEEEE",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": {
            "id": "07d9e733f3c86001",
            "url": "https://api.twitter.com/1.1/geo/id/07d9e733f3c86001.json",
            "place_type": "poi",
            "name": "Barry's Old School Irish",
            "full_name": "Barry's Old School Irish",
            "country_code": "US",
            "country": "United States",
            "contained_within": [],
            "bounding_box": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -77.43053529756835,
                    43.212090960044556
                  ],
                  [
                    -77.43053529756835,
                    43.212090960044556
                  ],
                  [
                    -77.43053529756835,
                    43.212090960044556
                  ],
                  [
                    -77.43053529756835,
                    43.212090960044556
                  ]
                ]
              ]
            },
            "attributes": {}
          },
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 22,
          "favorite_count": 370,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 22,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Sat Feb 29 20:33:14 +0000 2020",
        "id": 1233852753375568000,
        "id_str": "1233852753375567875",
        "text": "Hahaha gotta love a tryer @UrijahFaber good luck with the venture 🙏 https://t.co/DNtlJrN2qZ",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "UrijahFaber",
              "name": "Urijah Faber",
              "id": 23559108,
              "id_str": "23559108",
              "indices": [
                26,
                38
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/DNtlJrN2qZ",
              "expanded_url": "https://twitter.com/Maclifeofficial/status/1233773346233257984",
              "display_url": "twitter.com/Maclifeofficia…",
              "indices": [
                68,
                91
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1233773346233258000,
        "quoted_status_id_str": "1233773346233257984",
        "quoted_status": {
          "created_at": "Sat Feb 29 15:17:42 +0000 2020",
          "id": 1233773346233258000,
          "id_str": "1233773346233257984",
          "text": "Urijah Faber talks producer role in new movie Green Rush; having a script for Conor McGregor |… https://t.co/0PBRxxFjHF",
          "truncated": true,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/0PBRxxFjHF",
                "expanded_url": "https://twitter.com/i/web/status/1233773346233257984",
                "display_url": "twitter.com/i/web/status/1…",
                "indices": [
                  96,
                  119
                ]
              }
            ]
          },
          "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 4048468337,
            "id_str": "4048468337",
            "name": "TheMacLife",
            "screen_name": "Maclifeofficial",
            "location": "",
            "description": "Official account of https://t.co/OSAdZTQ2Pb",
            "url": "https://t.co/SY81g7kesI",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/SY81g7kesI",
                    "expanded_url": "http://www.themaclife.com",
                    "display_url": "themaclife.com",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": [
                  {
                    "url": "https://t.co/OSAdZTQ2Pb",
                    "expanded_url": "http://TheMacLife.com",
                    "display_url": "TheMacLife.com",
                    "indices": [
                      20,
                      43
                    ]
                  }
                ]
              }
            },
            "protected": false,
            "followers_count": 86861,
            "friends_count": 70,
            "listed_count": 237,
            "created_at": "Mon Oct 26 20:07:19 +0000 2015",
            "favourites_count": 438,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 11515,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/877488235378864132/Oppndz_9_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/877488235378864132/Oppndz_9_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/4048468337/1498044587",
            "profile_link_color": "41B667",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 39,
          "favorite_count": 675,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "retweet_count": 354,
        "favorite_count": 8919,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Sat Feb 29 19:00:15 +0000 2020",
        "id": 1233829351587819500,
        "id_str": "1233829351587819520",
        "text": "Excited for the UFC tonight! \nWishing @JoeJitsu and his wife @MeganOlivi a big good luck in their quest at UFC gold… https://t.co/aH2boccDAm",
        "truncated": true,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "JoeJitsu",
              "name": "Joseph Benavidez",
              "id": 112512232,
              "id_str": "112512232",
              "indices": [
                38,
                47
              ]
            },
            {
              "screen_name": "MeganOlivi",
              "name": "Megan Olivi",
              "id": 33261208,
              "id_str": "33261208",
              "indices": [
                61,
                72
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/aH2boccDAm",
              "expanded_url": "https://twitter.com/i/web/status/1233829351587819520",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                117,
                140
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 791,
        "favorite_count": 12705,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      {
        "created_at": "Sat Feb 29 18:07:03 +0000 2020",
        "id": 1233815964233412600,
        "id_str": "1233815964233412614",
        "text": "RT @ProperWhiskey: Celebrating one extra day to drink Proper this year #OneForAll #LeapYear https://t.co/LbsVkJavCi",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "OneForAll",
              "indices": [
                71,
                81
              ]
            },
            {
              "text": "LeapYear",
              "indices": [
                82,
                91
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                3,
                17
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 1233791911821004800,
              "id_str": "1233791911821004800",
              "indices": [
                92,
                115
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1233791911821004800/pu/img/BanzTfFpuNKxFH-8.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1233791911821004800/pu/img/BanzTfFpuNKxFH-8.jpg",
              "url": "https://t.co/LbsVkJavCi",
              "display_url": "pic.twitter.com/LbsVkJavCi",
              "expanded_url": "https://twitter.com/ProperWhiskey/status/1233791957551452166/video/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 768,
                  "h": 960,
                  "resize": "fit"
                },
                "small": {
                  "w": 544,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 768,
                  "h": 960,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233791957551452200,
              "source_status_id_str": "1233791957551452166",
              "source_user_id": 1021404469584703500,
              "source_user_id_str": "1021404469584703488"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1233791911821004800,
              "id_str": "1233791911821004800",
              "indices": [
                92,
                115
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1233791911821004800/pu/img/BanzTfFpuNKxFH-8.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1233791911821004800/pu/img/BanzTfFpuNKxFH-8.jpg",
              "url": "https://t.co/LbsVkJavCi",
              "display_url": "pic.twitter.com/LbsVkJavCi",
              "expanded_url": "https://twitter.com/ProperWhiskey/status/1233791957551452166/video/1",
              "type": "video",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 768,
                  "h": 960,
                  "resize": "fit"
                },
                "small": {
                  "w": 544,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 768,
                  "h": 960,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233791957551452200,
              "source_status_id_str": "1233791957551452166",
              "source_user_id": 1021404469584703500,
              "source_user_id_str": "1021404469584703488",
              "video_info": {
                "aspect_ratio": [
                  4,
                  5
                ],
                "duration_millis": 14633,
                "variants": [
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/ext_tw_video/1233791911821004800/pu/pl/tty5eoGe92da0ynQ.m3u8?tag=10"
                  },
                  {
                    "bitrate": 832000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1233791911821004800/pu/vid/360x450/QX_MFmPVG3MvVakZ.mp4?tag=10"
                  },
                  {
                    "bitrate": 2176000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1233791911821004800/pu/vid/720x900/5c99lyxns_XFf4qL.mp4?tag=10"
                  },
                  {
                    "bitrate": 632000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1233791911821004800/pu/vid/320x400/DH8oJFpOcTwyOLI6.mp4?tag=10"
                  }
                ]
              },
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "id": 1021404469584703500,
                  "id_str": "1021404469584703488",
                  "name": "Proper No. Twelve",
                  "screen_name": "ProperWhiskey",
                  "location": "",
                  "description": "Irish Whiskey from Conor McGregor Must be of legal drinking age to follow Drink Properly Drink Responsibly #PRPR12 #OneForAll",
                  "url": "https://t.co/30z6eN3q6B",
                  "entities": {
                    "url": {
                      "urls": [
                        {
                          "url": "https://t.co/30z6eN3q6B",
                          "expanded_url": "http://ProperWhiskey.com",
                          "display_url": "ProperWhiskey.com",
                          "indices": [
                            0,
                            23
                          ]
                        }
                      ]
                    },
                    "description": {
                      "urls": []
                    }
                  },
                  "protected": false,
                  "followers_count": 81525,
                  "friends_count": 1,
                  "listed_count": 46,
                  "created_at": "Mon Jul 23 14:39:37 +0000 2018",
                  "favourites_count": 143,
                  "utc_offset": null,
                  "time_zone": null,
                  "geo_enabled": false,
                  "verified": true,
                  "statuses_count": 374,
                  "lang": null,
                  "contributors_enabled": false,
                  "is_translator": false,
                  "is_translation_enabled": false,
                  "profile_background_color": "000000",
                  "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                  "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                  "profile_background_tile": false,
                  "profile_image_url": "http://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/1021404469584703488/1537190817",
                  "profile_link_color": "B49660",
                  "profile_sidebar_border_color": "000000",
                  "profile_sidebar_fill_color": "000000",
                  "profile_text_color": "000000",
                  "profile_use_background_image": false,
                  "has_extended_profile": false,
                  "default_profile": false,
                  "default_profile_image": false,
                  "following": false,
                  "follow_request_sent": false,
                  "notifications": false,
                  "translator_type": "none"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sat Feb 29 16:31:40 +0000 2020",
          "id": 1233791957551452200,
          "id_str": "1233791957551452166",
          "text": "Celebrating one extra day to drink Proper this year #OneForAll #LeapYear https://t.co/LbsVkJavCi",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "OneForAll",
                "indices": [
                  52,
                  62
                ]
              },
              {
                "text": "LeapYear",
                "indices": [
                  63,
                  72
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
              {
                "id": 1233791911821004800,
                "id_str": "1233791911821004800",
                "indices": [
                  73,
                  96
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1233791911821004800/pu/img/BanzTfFpuNKxFH-8.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1233791911821004800/pu/img/BanzTfFpuNKxFH-8.jpg",
                "url": "https://t.co/LbsVkJavCi",
                "display_url": "pic.twitter.com/LbsVkJavCi",
                "expanded_url": "https://twitter.com/ProperWhiskey/status/1233791957551452166/video/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 768,
                    "h": 960,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 544,
                    "h": 680,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 768,
                    "h": 960,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1233791911821004800,
                "id_str": "1233791911821004800",
                "indices": [
                  73,
                  96
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1233791911821004800/pu/img/BanzTfFpuNKxFH-8.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1233791911821004800/pu/img/BanzTfFpuNKxFH-8.jpg",
                "url": "https://t.co/LbsVkJavCi",
                "display_url": "pic.twitter.com/LbsVkJavCi",
                "expanded_url": "https://twitter.com/ProperWhiskey/status/1233791957551452166/video/1",
                "type": "video",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 768,
                    "h": 960,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 544,
                    "h": 680,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 768,
                    "h": 960,
                    "resize": "fit"
                  }
                },
                "video_info": {
                  "aspect_ratio": [
                    4,
                    5
                  ],
                  "duration_millis": 14633,
                  "variants": [
                    {
                      "content_type": "application/x-mpegURL",
                      "url": "https://video.twimg.com/ext_tw_video/1233791911821004800/pu/pl/tty5eoGe92da0ynQ.m3u8?tag=10"
                    },
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233791911821004800/pu/vid/360x450/QX_MFmPVG3MvVakZ.mp4?tag=10"
                    },
                    {
                      "bitrate": 2176000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233791911821004800/pu/vid/720x900/5c99lyxns_XFf4qL.mp4?tag=10"
                    },
                    {
                      "bitrate": 632000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233791911821004800/pu/vid/320x400/DH8oJFpOcTwyOLI6.mp4?tag=10"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 1021404469584703500,
            "id_str": "1021404469584703488",
            "name": "Proper No. Twelve",
            "screen_name": "ProperWhiskey",
            "location": "",
            "description": "Irish Whiskey from Conor McGregor Must be of legal drinking age to follow Drink Properly Drink Responsibly #PRPR12 #OneForAll",
            "url": "https://t.co/30z6eN3q6B",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/30z6eN3q6B",
                    "expanded_url": "http://ProperWhiskey.com",
                    "display_url": "ProperWhiskey.com",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 81525,
            "friends_count": 1,
            "listed_count": 46,
            "created_at": "Mon Jul 23 14:39:37 +0000 2018",
            "favourites_count": 143,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 374,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1021404469584703488/1537190817",
            "profile_link_color": "B49660",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 185,
          "favorite_count": 2342,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 185,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Fri Feb 28 23:40:32 +0000 2020",
        "id": 1233537501140267000,
        "id_str": "1233537501140267009",
        "text": "RT @GrovesIsGod: It’s just a proper combination @steveaustinBSR @TheNotoriousMMA @ProperWhiskey https://t.co/D87EVICm4q",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "GrovesIsGod",
              "name": "Mikey Groves",
              "id": 15657389,
              "id_str": "15657389",
              "indices": [
                3,
                15
              ]
            },
            {
              "screen_name": "steveaustinBSR",
              "name": "Steve Austin",
              "id": 112915037,
              "id_str": "112915037",
              "indices": [
                48,
                63
              ]
            },
            {
              "screen_name": "TheNotoriousMMA",
              "name": "Conor McGregor",
              "id": 369583954,
              "id_str": "369583954",
              "indices": [
                64,
                80
              ]
            },
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                81,
                95
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 1233514688731893800,
              "id_str": "1233514688731893762",
              "indices": [
                96,
                119
              ],
              "media_url": "http://pbs.twimg.com/media/ER5TEu8XUAIScY0.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ER5TEu8XUAIScY0.jpg",
              "url": "https://t.co/D87EVICm4q",
              "display_url": "pic.twitter.com/D87EVICm4q",
              "expanded_url": "https://twitter.com/GrovesIsGod/status/1233514700824072193/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233514700824072200,
              "source_status_id_str": "1233514700824072193",
              "source_user_id": 15657389,
              "source_user_id_str": "15657389"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1233514688731893800,
              "id_str": "1233514688731893762",
              "indices": [
                96,
                119
              ],
              "media_url": "http://pbs.twimg.com/media/ER5TEu8XUAIScY0.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ER5TEu8XUAIScY0.jpg",
              "url": "https://t.co/D87EVICm4q",
              "display_url": "pic.twitter.com/D87EVICm4q",
              "expanded_url": "https://twitter.com/GrovesIsGod/status/1233514700824072193/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                }
              },
              "source_status_id": 1233514700824072200,
              "source_status_id_str": "1233514700824072193",
              "source_user_id": 15657389,
              "source_user_id_str": "15657389"
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Fri Feb 28 22:09:56 +0000 2020",
          "id": 1233514700824072200,
          "id_str": "1233514700824072193",
          "text": "It’s just a proper combination @steveaustinBSR @TheNotoriousMMA @ProperWhiskey https://t.co/D87EVICm4q",
          "truncated": false,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "steveaustinBSR",
                "name": "Steve Austin",
                "id": 112915037,
                "id_str": "112915037",
                "indices": [
                  31,
                  46
                ]
              },
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  47,
                  63
                ]
              },
              {
                "screen_name": "ProperWhiskey",
                "name": "Proper No. Twelve",
                "id": 1021404469584703500,
                "id_str": "1021404469584703488",
                "indices": [
                  64,
                  78
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1233514688731893800,
                "id_str": "1233514688731893762",
                "indices": [
                  79,
                  102
                ],
                "media_url": "http://pbs.twimg.com/media/ER5TEu8XUAIScY0.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ER5TEu8XUAIScY0.jpg",
                "url": "https://t.co/D87EVICm4q",
                "display_url": "pic.twitter.com/D87EVICm4q",
                "expanded_url": "https://twitter.com/GrovesIsGod/status/1233514700824072193/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1233514688731893800,
                "id_str": "1233514688731893762",
                "indices": [
                  79,
                  102
                ],
                "media_url": "http://pbs.twimg.com/media/ER5TEu8XUAIScY0.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ER5TEu8XUAIScY0.jpg",
                "url": "https://t.co/D87EVICm4q",
                "display_url": "pic.twitter.com/D87EVICm4q",
                "expanded_url": "https://twitter.com/GrovesIsGod/status/1233514700824072193/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 15657389,
            "id_str": "15657389",
            "name": "Mikey Groves",
            "screen_name": "GrovesIsGod",
            "location": "Staten Island, NY",
            "description": "Living the life. Most of these tweets will either be about me being drunk or wrestling.",
            "url": null,
            "entities": {
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 428,
            "friends_count": 430,
            "listed_count": 5,
            "created_at": "Wed Jul 30 06:42:33 +0000 2008",
            "favourites_count": 2691,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": false,
            "statuses_count": 8373,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "709397",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1217869630787612672/k72v11lC_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1217869630787612672/k72v11lC_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/15657389/1561990897",
            "profile_link_color": "FF3300",
            "profile_sidebar_border_color": "86A4A6",
            "profile_sidebar_fill_color": "A0C5C7",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 55,
          "favorite_count": 893,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 55,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Fri Feb 28 17:01:14 +0000 2020",
        "id": 1233437012574773200,
        "id_str": "1233437012574773249",
        "text": "Glorious! @ProperWhiskey https://t.co/7sDHOCsjLc",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                10,
                24
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/7sDHOCsjLc",
              "expanded_url": "https://twitter.com/sports8/status/1233431746265436160",
              "display_url": "twitter.com/sports8/status…",
              "indices": [
                25,
                48
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1233431746265436200,
        "quoted_status_id_str": "1233431746265436160",
        "quoted_status": {
          "created_at": "Fri Feb 28 16:40:19 +0000 2020",
          "id": 1233431746265436200,
          "id_str": "1233431746265436160",
          "text": "@TheNotoriousMMA name is everywhere.  In Indy for the #NFLCombine and look what rolls by. https://t.co/8IlRwCss34",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "NFLCombine",
                "indices": [
                  54,
                  65
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  0,
                  16
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1233431691705884700,
                "id_str": "1233431691705884677",
                "indices": [
                  90,
                  113
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1233431691705884677/pu/img/TCbowpUqMh0sRF8u.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1233431691705884677/pu/img/TCbowpUqMh0sRF8u.jpg",
                "url": "https://t.co/8IlRwCss34",
                "display_url": "pic.twitter.com/8IlRwCss34",
                "expanded_url": "https://twitter.com/sports8/status/1233431746265436160/video/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1280,
                    "h": 720,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1233431691705884700,
                "id_str": "1233431691705884677",
                "indices": [
                  90,
                  113
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1233431691705884677/pu/img/TCbowpUqMh0sRF8u.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1233431691705884677/pu/img/TCbowpUqMh0sRF8u.jpg",
                "url": "https://t.co/8IlRwCss34",
                "display_url": "pic.twitter.com/8IlRwCss34",
                "expanded_url": "https://twitter.com/sports8/status/1233431746265436160/video/1",
                "type": "video",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1280,
                    "h": 720,
                    "resize": "fit"
                  }
                },
                "video_info": {
                  "aspect_ratio": [
                    16,
                    9
                  ],
                  "duration_millis": 7850,
                  "variants": [
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233431691705884677/pu/vid/640x360/1TvjVSfm6Phix--v.mp4?tag=10"
                    },
                    {
                      "content_type": "application/x-mpegURL",
                      "url": "https://video.twimg.com/ext_tw_video/1233431691705884677/pu/pl/NYglO9p898UctKqu.m3u8?tag=10"
                    },
                    {
                      "bitrate": 2176000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233431691705884677/pu/vid/1280x720/ZheUBbQMiZuDM1dc.mp4?tag=10"
                    },
                    {
                      "bitrate": 256000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1233431691705884677/pu/vid/480x270/6hbgth4coswUkok1.mp4?tag=10"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": 369583954,
          "in_reply_to_user_id_str": "369583954",
          "in_reply_to_screen_name": "TheNotoriousMMA",
          "user": {
            "id": 20620737,
            "id_str": "20620737",
            "name": "Chris Maathuis",
            "screen_name": "sports8",
            "location": "Las Vegas",
            "description": "Emmy winning Sports Director, KLAS-TV (CBS). Opinions are my own. Retweets are not endorsements.",
            "url": "https://t.co/3E8EURA4X9",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/3E8EURA4X9",
                    "expanded_url": "http://www.lasvegasnow.com",
                    "display_url": "lasvegasnow.com",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 4629,
            "friends_count": 897,
            "listed_count": 191,
            "created_at": "Wed Feb 11 19:55:15 +0000 2009",
            "favourites_count": 3814,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 19689,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "0A1517",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/580405320436092930/pU1kVYzd_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/580405320436092930/pU1kVYzd_normal.jpg",
            "profile_link_color": "13578F",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "B2BEBF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 19,
          "favorite_count": 349,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "retweet_count": 168,
        "favorite_count": 4744,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      {
        "created_at": "Fri Feb 28 00:18:20 +0000 2020",
        "id": 1233184625469673500,
        "id_str": "1233184625469673472",
        "text": "@espnmma @bokamotoESPN @marc_raimondi @jeffwagenheim @TeamKhabib @GamebredFighter @NateDiaz209 @USMAN84kg Incredible.",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "espnmma",
              "name": "ESPN MMA",
              "id": 1062738433716686800,
              "id_str": "1062738433716686848",
              "indices": [
                0,
                8
              ]
            },
            {
              "screen_name": "bokamotoESPN",
              "name": "Brett Okamoto",
              "id": 224836446,
              "id_str": "224836446",
              "indices": [
                9,
                22
              ]
            },
            {
              "screen_name": "marc_raimondi",
              "name": "Marc Raimondi",
              "id": 69351991,
              "id_str": "69351991",
              "indices": [
                23,
                37
              ]
            },
            {
              "screen_name": "jeffwagenheim",
              "name": "Jeff Wagenheim",
              "id": 58390782,
              "id_str": "58390782",
              "indices": [
                38,
                52
              ]
            },
            {
              "screen_name": "TeamKhabib",
              "name": "khabib nurmagomedov",
              "id": 452653869,
              "id_str": "452653869",
              "indices": [
                53,
                64
              ]
            },
            {
              "screen_name": "GamebredFighter",
              "name": "Jorge Masvidal UFC",
              "id": 242960383,
              "id_str": "242960383",
              "indices": [
                65,
                81
              ]
            },
            {
              "screen_name": "NateDiaz209",
              "name": "Nathan Diaz",
              "id": 52181976,
              "id_str": "52181976",
              "indices": [
                82,
                94
              ]
            },
            {
              "screen_name": "USMAN84kg",
              "name": "KAMARU USMAN",
              "id": 182662505,
              "id_str": "182662505",
              "indices": [
                95,
                105
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": 1233170813618212900,
        "in_reply_to_status_id_str": "1233170813618212867",
        "in_reply_to_user_id": 1062738433716686800,
        "in_reply_to_user_id_str": "1062738433716686848",
        "in_reply_to_screen_name": "espnmma",
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 157,
        "favorite_count": 2906,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      {
        "created_at": "Thu Feb 27 21:01:27 +0000 2020",
        "id": 1233135078173290500,
        "id_str": "1233135078173290505",
        "text": "RT @Robby54Gee: Definitely coppin’ one for the weekend! @TheNotoriousMMA @ProperWhiskey https://t.co/tt9Tkjky0Y",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "Robby54Gee",
              "name": "Robby Gutierrez",
              "id": 1629471403,
              "id_str": "1629471403",
              "indices": [
                3,
                14
              ]
            },
            {
              "screen_name": "TheNotoriousMMA",
              "name": "Conor McGregor",
              "id": 369583954,
              "id_str": "369583954",
              "indices": [
                56,
                72
              ]
            },
            {
              "screen_name": "ProperWhiskey",
              "name": "Proper No. Twelve",
              "id": 1021404469584703500,
              "id_str": "1021404469584703488",
              "indices": [
                73,
                87
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 1232850329819132000,
              "id_str": "1232850329819131904",
              "indices": [
                88,
                111
              ],
              "media_url": "http://pbs.twimg.com/media/ERv219IXsAAczUc.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ERv219IXsAAczUc.jpg",
              "url": "https://t.co/tt9Tkjky0Y",
              "display_url": "pic.twitter.com/tt9Tkjky0Y",
              "expanded_url": "https://twitter.com/Robby54Gee/status/1232850338585235456/photo/1",
              "type": "photo",
              "sizes": {
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                }
              },
              "source_status_id": 1232850338585235500,
              "source_status_id_str": "1232850338585235456",
              "source_user_id": 1629471403,
              "source_user_id_str": "1629471403"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 1232850329819132000,
              "id_str": "1232850329819131904",
              "indices": [
                88,
                111
              ],
              "media_url": "http://pbs.twimg.com/media/ERv219IXsAAczUc.jpg",
              "media_url_https": "https://pbs.twimg.com/media/ERv219IXsAAczUc.jpg",
              "url": "https://t.co/tt9Tkjky0Y",
              "display_url": "pic.twitter.com/tt9Tkjky0Y",
              "expanded_url": "https://twitter.com/Robby54Gee/status/1232850338585235456/photo/1",
              "type": "photo",
              "sizes": {
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                }
              },
              "source_status_id": 1232850338585235500,
              "source_status_id_str": "1232850338585235456",
              "source_user_id": 1629471403,
              "source_user_id_str": "1629471403"
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 369583954,
          "id_str": "369583954",
          "name": "Conor McGregor",
          "screen_name": "TheNotoriousMMA",
          "location": "Dublin, Ireland",
          "description": "Two division UFC World Champion. Two division Cage Warriors World Champion. Making history EVERYDAY!! #NOTORIOUS #EIRE",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 7987029,
          "friends_count": 622,
          "listed_count": 6106,
          "created_at": "Wed Sep 07 16:13:03 +0000 2011",
          "favourites_count": 6393,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": true,
          "statuses_count": 8465,
          "lang": null,
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/798351849984294912/okhePpJW_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/369583954/1479176890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false,
          "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Thu Feb 27 02:10:00 +0000 2020",
          "id": 1232850338585235500,
          "id_str": "1232850338585235456",
          "text": "Definitely coppin’ one for the weekend! @TheNotoriousMMA @ProperWhiskey https://t.co/tt9Tkjky0Y",
          "truncated": false,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "TheNotoriousMMA",
                "name": "Conor McGregor",
                "id": 369583954,
                "id_str": "369583954",
                "indices": [
                  40,
                  56
                ]
              },
              {
                "screen_name": "ProperWhiskey",
                "name": "Proper No. Twelve",
                "id": 1021404469584703500,
                "id_str": "1021404469584703488",
                "indices": [
                  57,
                  71
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 1232850329819132000,
                "id_str": "1232850329819131904",
                "indices": [
                  72,
                  95
                ],
                "media_url": "http://pbs.twimg.com/media/ERv219IXsAAczUc.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ERv219IXsAAczUc.jpg",
                "url": "https://t.co/tt9Tkjky0Y",
                "display_url": "pic.twitter.com/tt9Tkjky0Y",
                "expanded_url": "https://twitter.com/Robby54Gee/status/1232850338585235456/photo/1",
                "type": "photo",
                "sizes": {
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1232850329819132000,
                "id_str": "1232850329819131904",
                "indices": [
                  72,
                  95
                ],
                "media_url": "http://pbs.twimg.com/media/ERv219IXsAAczUc.jpg",
                "media_url_https": "https://pbs.twimg.com/media/ERv219IXsAAczUc.jpg",
                "url": "https://t.co/tt9Tkjky0Y",
                "display_url": "pic.twitter.com/tt9Tkjky0Y",
                "expanded_url": "https://twitter.com/Robby54Gee/status/1232850338585235456/photo/1",
                "type": "photo",
                "sizes": {
                  "small": {
                    "w": 510,
                    "h": 680,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 900,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1536,
                    "h": 2048,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 1629471403,
            "id_str": "1629471403",
            "name": "Robby Gutierrez",
            "screen_name": "Robby54Gee",
            "location": "Stafford, TX",
            "description": "fuccckk itttt. @GailynnM_03",
            "url": null,
            "entities": {
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 144,
            "friends_count": 194,
            "listed_count": 0,
            "created_at": "Mon Jul 29 04:11:01 +0000 2013",
            "favourites_count": 903,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": false,
            "statuses_count": 1681,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1188672491683827712/EMkCFHXp_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1188672491683827712/EMkCFHXp_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1629471403/1431707457",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 22,
          "favorite_count": 441,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 22,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      }
    ],
    "resp": {
      "statusCode": 200,
      "headers": {
        "cache-control": "no-cache, no-store, must-revalidate, pre-check=0, post-check=0",
        "connection": "close",
        "content-disposition": "attachment; filename=json.json",
        "content-encoding": "gzip",
        "content-length": "12884",
        "content-type": "application/json;charset=utf-8",
        "date": "Sun, 15 Mar 2020 23:39:20 GMT",
        "expires": "Tue, 31 Mar 1981 05:00:00 GMT",
        "last-modified": "Sun, 15 Mar 2020 23:39:20 GMT",
        "pragma": "no-cache",
        "server": "tsa_b",
        "set-cookie": [
          "personalization_id=\"v1_i/A5nnm4sPOOsQSUiWchVg==\"; Max-Age=63072000; Expires=Tue, 15 Mar 2022 23:39:20 GMT; Path=/; Domain=.twitter.com; Secure; SameSite=None",
          "lang=en; Path=/",
          "guest_id=v1%3A158431556078414997; Max-Age=63072000; Expires=Tue, 15 Mar 2022 23:39:20 GMT; Path=/; Domain=.twitter.com; Secure; SameSite=None"
        ],
        "status": "200 OK",
        "strict-transport-security": "max-age=631138519",
        "x-access-level": "read-write",
        "x-app-rate-limit-limit": "100000",
        "x-app-rate-limit-remaining": "99995",
        "x-app-rate-limit-reset": "1584392579",
        "x-connection-hash": "af8a826109eddbd3a496cbe14470fd6c",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
        "x-rate-limit-limit": "900",
        "x-rate-limit-remaining": "896",
        "x-rate-limit-reset": "1584315893",
        "x-response-time": "112",
        "x-transaction": "00b71ab200896bf4",
        "x-twitter-response-tags": "BouncerCompliant",
        "x-xss-protection": "0"
      },
      "request": {
        "uri": {
          "protocol": "https:",
          "slashes": true,
          "auth": null,
          "host": "api.twitter.com",
          "port": 443,
          "hostname": "api.twitter.com",
          "hash": null,
          "search": "?user_id=369583954&count=20",
          "query": "user_id=369583954&count=20",
          "pathname": "/1.1/statuses/user_timeline.json",
          "path": "/1.1/statuses/user_timeline.json?user_id=369583954&count=20",
          "href": "https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=369583954&count=20"
        },
        "method": "GET",
        "headers": {
          "Accept": "*/*",
          "User-Agent": "twit-client",
          "Content-type": "application/json",
          "accept-encoding": "gzip, deflate",
          "Authorization": "OAuth oauth_consumer_key=\"xSsdlaiuyVywoVRiol7wYVlxk\",oauth_nonce=\"684670f2a3ee4e3e8be9868fd8e9f1d1\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1584315560\",oauth_token=\"1211720013641420800-FyenVVQAJCFKhzzK9gouy31s3A3ABd\",oauth_version=\"1.0\",oauth_signature=\"e%2FTyC0NCJ5LYky96Uw8COttXO28%3D\""
        }
      }
    }
  };
  names = [
    { id: '1', name: 'Conor Mcgregor', active: true },
    { id: '2', name: 'Elon Musk', active: false },
    { id: '3', name: 'Burger King', active: false },
    { id: '4', name: 'Wendy\'s', active: false },
    { id: '5', name: 'Chipotle', active: false },
  ];

  constructor(private http: HttpService) {

  }
  ngOnInit() {
    // this.http.getTweet('1').subscribe(
    //   (x: any) => {
    //     this.data = x;

    //   },
    //   (err: any) => {

    //     alert(err.status + ' : ' + err.statusText);
    //   }

    // );

  }

  onClick(e, id) {
    e.stopPropagation();
    // this.http.getTweet(id).subscribe(
    //   (x: any) => {
    //     console.log(x);
    //     this.data = x;
    //     console.log(this.data);
    //   },
    //   (err: any) => {
    //     console.log(err);
    //     alert(err.statusText);
    //   }
    // );
    this.names.forEach(name => {
      if (name.id === id) { name.active = true; } else {
        name.active = false;
      }
    });

  }

}
