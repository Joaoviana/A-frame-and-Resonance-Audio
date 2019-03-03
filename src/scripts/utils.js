//utilities for just random stuff that might be useful in many places

const setAllRoomProperties = ((material) => {
    let roomPropertiesObj = {
        left: material,
        right: material,
        front: material,
        back: material,
        down: material,
        up: material,
    };
    return roomPropertiesObj;
});

const setCustomRoomProperties= ((propsObj) => {
    if(propsObj) {
        let roomPropertiesObj = {
            left: propsObj.left,
            right: propsObj.right,
            front: propsObj.front,
            back: propsObj.back,
            down: propsObj.floor,
            up: propsObj.ceiling,
        };
        return roomPropertiesObj;
    } else 
        console.log('nope');
});

const setAllRoomDimensions = ((dimension) => {
    let roomDimensionsObj = {
        width: dimension,
        height: dimension,
        depth: dimension,
    };
    return roomDimensionsObj;
});

// AFRAME.registerComponent("set-extra-props-button", {
//   init: function() {
//     this.el.addEventListener("click", function(evt) {
//       let sceneEl = document.querySelector("a-scene");
//       let mask = sceneEl.querySelector("#mask");
//       mask.setAttribute(
//         "template",
//         "src",
//         "./src/templates/customiseMenu/customiseMenu5.template"
//       );
//       console.log(customiseMenuObject);
//       handleCustomisedSelection(customiseMenuObject);
//     });
//   }
// });