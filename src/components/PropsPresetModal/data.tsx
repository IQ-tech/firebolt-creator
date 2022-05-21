import { propsPresets } from "@iq-firebolt/br-addons";
import { FileTextOutlined } from "@ant-design/icons";

export const collections = [propsPresets];
export const treeData = collections.map((collection) => {
  const collectionName = collection.name;
  const collectionPresets = collection.presets || {};
  const collectionPresetsFormatted = Object.keys(collectionPresets).map(
    (presetId) => ({
      title: presetId,
      key: `preset-${collectionName}-${presetId}`,
      icon: <FileTextOutlined />,
    })
  );
  return {
    title: collectionName,
    key: collectionName,
    children: collectionPresetsFormatted,
  };
});

;
