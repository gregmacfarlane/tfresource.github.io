(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{216:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Connected and autonomous vehicles (CAV) are a rapidly evolving mode of travel, and one of several "),a("a",{attrs:{href:"emerging_megatrends_in_transport_planning"}},[e._v("emerging megatrends in transport planning")]),e._v(" that will profoundly change travel behavior and patterns over the coming decades. There are several CAV definitions in the literature and press. There are enough that we have created a "),a("a",{attrs:{href:"Autonomous_vehicles_Lexicon"}},[e._v("lexicon")]),e._v(" to define our terminology. We follow the "),a("a",{attrs:{href:"https://www.sae.org/misc/pdfs/automated_driving.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAE definitions"),a("OutboundLink")],1),e._v(", which include six levels of automation ranging from none at all to fully connected and autonomous vehicles, with the latter including a high level of system-level control of the transport network. The discussion that follows assumes a fully automated future (SAE level 5), which we make explicit with the acronym "),a("b",[e._v("CAV")]),e._v(". Some of the concepts discussed may be applicable to lower levels of automation, but the focus here is upon CAV futures.")]),e._v(" "),a("p",[e._v("CAVs will influence all types of travel, from local commuting to long-distance travel. The discussion that follows applies to personal travel, primarily in the metropolitan settings. The parallel advances in "),a("a",{attrs:{href:"https://link.springer.com/content/pdf/10.1007/978-3-662-48847-8_18.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("freight and commercial CAVs"),a("OutboundLink")],1),e._v(" are not addressed here, nor are related technologies such as "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Delivery_drone",target:"_blank",rel:"noopener noreferrer"}},[e._v("delivery drones"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://www.technologyreview.com/s/601417/the-unbelievable-reality-of-the-impossible-hyperloop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hyperloops"),a("OutboundLink")],1),e._v(". The design of specific models is not addressed in this discussion. Rather, the context, behavioral foundations, modeling mindsets and methods, success stories from elsewhere are profiled.")]),e._v(" "),a("p",[e._v("Simulating CAV effects will require fundamentally rethinking how most transport planning models are structured and applied. There are some effects that can be represented using traditional models, but the majority of likely behavioral changes will affect all traveler preferences, choices, and costs. Many of these will be second or higher-order effects that will be realized through feedback loops or replanning. Discussions about the policy and planning context, major behavioral changes, and modeling frameworks are described in the sections linked to below. Case studies of several evolving models are also presented. The reader should be able to grasp the appropriate modeling approaches in light of their requirements.")]),e._v(" "),a("p",[e._v("This collection of pages proposes a "),a("em",[e._v("recipe")]),e._v(" illustrated below. The recipe begins with the modeler understanding the policy decisions the model will inform, and then a consideration of which transportation behaviors will be affected by these policies. Only then should the modeler consider which adjustments, if any, need to be applied to the model.")]),e._v(" "),a("p",[e._v('![Recipe to consider the impact of CAVs.](Av modeling recipe.png "Recipe to consider the impact of CAVs.")')]),e._v(" "),a("h2",{attrs:{id:"planning-and-policy-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planning-and-policy-context"}},[e._v("#")]),e._v(" Planning and policy context")]),e._v(" "),a("p",[e._v("A wide variety of questions about CAV futures are being posed by policymakers. A number of policy papers have been published on the topic, but they describe the problem space much better than specifying forecasting approaches. A number of policy issues and strategies identified in "),a("a",{attrs:{href:"http://www.trb.org/Main/Blurbs/176418.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("NCHRP Report 845"),a("OutboundLink")],1),e._v(" are summarized on the "),a("a",{attrs:{href:"Autonomous_vehicles_planning_and_policy_context"}},[e._v("planning and policy context")]),e._v(" page. Other issues identified in other reports have been added to the discussion.")]),e._v(" "),a("h2",{attrs:{id:"behavioral-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#behavioral-considerations"}},[e._v("#")]),e._v(" Behavioral considerations")]),e._v(" "),a("p",[e._v("The availability of AVs, either as privately-owned, shared, or hired vehicles, will open a range of travel possibilities not available today, and change many aspects of current modes. Time spent traveling in CAVs will be spent on other activities, reducing the disutility and cost of travel. Sharing an CAV or forgoing private auto ownership will likely become commonplace, further changing mobility patterns and creating new travel opportunities for young, elderly, and disabled persons. These and other "),a("a",{attrs:{href:"Autonomous_vehicles_Behavioral_considerations"}},[e._v("behavioral considerations")]),e._v(" will form the basis for model specifications that include the full range of CAV impacts on travel behavior and network performance.")]),e._v(" "),a("h2",{attrs:{id:"operational-and-network-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operational-and-network-considerations"}},[e._v("#")]),e._v(" Operational and network considerations")]),e._v(" "),a("p",[a("code",[e._v("Under construction: [dead-heading, networks, AV technology, ...]")])]),e._v(" "),a("h2",{attrs:{id:"modeling-frameworks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modeling-frameworks"}},[e._v("#")]),e._v(" Modeling frameworks")]),e._v(" "),a("p",[e._v("The likely effects of CAVs will influence all aspects of travel behavior encompassed by travel forecasting models. This will necessitate a revolution in "),a("a",{attrs:{href:"Autonomous_vehicles_Modeling_frameworks"}},[e._v("modeling frameworks")]),e._v(" suitable for measuring their extent and impacts. While the range of policy issues and strategies is long and varied there are few AV futures that are unlikely to influence all aspects of modeled behavior, to include long-term location choices, short-term travel choices (to include daily activity patterns and activity scheduling), and network assignment. While some can be accommodated within the traditional four-step modeling paradigm most will be better addressed using visioning and activity-based travel modeling frameworks.")]),e._v(" "),a("h2",{attrs:{id:"forecasting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forecasting"}},[e._v("#")]),e._v(" Forecasting")]),e._v(" "),a("p",[e._v("Forecasting for uncertain futures has arguably never been more challenging than today, when CAVs are just one of several transformational economic, social, and technological changes likely to result in major changes in travel behavior and network performance. The section on "),a("a",{attrs:{href:"Autonomous_vehicles_Forecasting"}},[e._v("forecasting")]),e._v(" discusses several considerations that are particularly germane when modeling CAV futures. It is important to note that new approaches to forecasting may be easier to implement and communicate than adapting existing models. "),a("a",{attrs:{href:"Strategic_Models"}},[e._v("Strategic Models")]),e._v(" provide the ability to simulate a wide variety of new transport options, modes, and services, either singly or in combination. They are viable alternatives to more sophisticated behavioral models when screening a large number of alternate futures.")]),e._v(" "),a("h2",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),a("p",[e._v("Models are designed to inform policy decisions, not to predict the future. Thus, it is difficult to specify a particular model form that is useful or needed for every possible CAV scenario. Instead, you should consider the policies that decision makers want to address, what behaviors may result from those policies, and then consider what model forms or components will address those behaviors. In this page, we walk through this process for three separate policies:")]),e._v(" "),a("ol",[a("li",[e._v("Road widening projects will cease, and funds will be diverted to other uses")]),e._v(" "),a("li",[e._v("Some freeway lanes will be dedicated for CAV use")]),e._v(" "),a("li",[e._v("Authorities will levy an occupancy-differentiated VMT tax")])]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"Autonomous_vehicles_use_cases"}},[e._v("Use cases")]),e._v(" for more information.")]),e._v(" "),a("h2",{attrs:{id:"early-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#early-applications"}},[e._v("#")]),e._v(" Early applications")]),e._v(" "),a("p",[e._v("A number of agencies have already incorporated CAV effects into their transport planning models and forecasts. They have been explicit from the outset in most "),a("a",{attrs:{href:"Strategic_Models"}},[e._v("visioning")]),e._v(" models. However, several agencies have begun explicitly representing them in travel forecasts for their region. None approach the ideal frameworks considered in our "),a("a",{attrs:{href:"Autonomous_vehicles_Forecasting"}},[e._v("forecasting")]),e._v(" section, but many have or are working towards some of them. The "),a("a",{attrs:{href:"Autonomous_vehicles_Early_applications"}},[e._v("early applications")]),e._v(" profiled include recent innovations from the Puget Sound region, the San Francisco Bay Area, and the Canadian province of Ontario.")]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further reading")]),e._v(" "),a("p",[e._v("A number of policymakers and planners have written white papers and reports describing how CAVs might affect land use and travel behavior over the coming decades. Many of these were reviewed in the preparation of this and related pages in TFResource. Some cover the policy, planning, and legal aspects of CAVs, to include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.trb.org/Main/Blurbs/176418.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Advancing Automated and Connected Vehicles: Policy and Planning Strategies for State and Local Transportation Agencies"),a("OutboundLink")],1),e._v(" (NCHRP Research Report 845)")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.wsp-pb.com/Globaln/USA/Transportation%20and%20Infrastructure/driving-towards-driverless-WBP-Fellow-monograph-lauren-isaac-feb-24-2016.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Driving Towards Driverless: A Guide for Government Agencies"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.wsp-pb.com/Globaln/UK/WSPPB-Farrells-AV-whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Making Better Places: Autonomous Vehicles and Future Opportunities"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://reprogrammingmobility.org/scenarios/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Re-Programming Mobility: The Digital Transformation of Transportation in the United States"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://nacto.org/publication/bau/blueprint-for-autonomous-urbanism/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blueprint for Autonomous Urbanism"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("There is considerably less definitive guidance on how to include CAVs in travel forecasting models. One emerging resource is the on-going "),a("a",{attrs:{href:"http://apps.trb.org/cmsfeed/TRBNetProjectDisplay.asp?ProjectID=4008",target:"_blank",rel:"noopener noreferrer"}},[e._v("NCHRP Project 20-102(09)"),a("OutboundLink")],1),e._v(", which seeks to provide guidance on how [, [, and "),a("a",{attrs:{href:"Strategic_Models"}},[e._v("visioning")]),e._v(" models might evolve in order to incorporate travel changes due to CAVs. A large number of academic papers and research reports have been recently published or in progress, but most of them cannot be quickly implemented and capable of addressing the issues described in the pages linked above.")]),e._v(" "),a("h1",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[a("a",{attrs:{href:"Content_Charrette_Autonomous_Vehicles"}},[e._v("Content Charrette: Autonomous Vehicles")])])])}),[],!1,null,null,null);t.default=o.exports}}]);