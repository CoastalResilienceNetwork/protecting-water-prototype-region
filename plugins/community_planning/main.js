define([
    "dojo/_base/declare",
    "plugins/layer_selector/main",
    "dojo/text!./layers.json"],
    function (declare,
              LayerSelectorPlugin,
              layerSourcesJson) {
        return declare(LayerSelectorPlugin, {
            toolbarName: "Community Planning",
            fullName: "Configure and control layers to be overlayed on the base map.",
<<<<<<< HEAD
			infoGraphic: "plugins/community_planning/CommunityPlanning_c.jpg",
=======
			infoGraphic: "plugins/community_planning/CommunityPlanning_c2.jpg",
>>>>>>> origin/development

            getLayersJson: function() {
                return layerSourcesJson;
            }
        });
    }
);
