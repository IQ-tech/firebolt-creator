import { useState } from "react";

export default function usePropsPresetModal({ collections, onClose }) {
  const [visiblePreset, setVisiblePreset] = useState({});
  const isDemoJsonEmpty = !Object.keys(visiblePreset).length;

  function handleSelectPreset(keys) {
    const safeKeys = keys || [];
    const selectedPresetKey = safeKeys[0];
    const selectedCollection = collections.find((collection) => {
      const collectionPresets = collection.presets || {};
      const collectionsPresetsKeys = Object.keys(collectionPresets);
      const formattedPresetsIds = collectionsPresetsKeys.map(
        (selectedPresetKey) => `preset-${collection.name}-${selectedPresetKey}`
      );
      return formattedPresetsIds.includes(selectedPresetKey);
    });

    if (selectedCollection) {
      const collectionPresets = selectedCollection?.presets || {};
      const preset = Object.keys(collectionPresets).reduce((acc, presetKey) => {
        const formattedId = `preset-${selectedCollection.name}-${presetKey}`;

        if (formattedId === selectedPresetKey) {
          return collectionPresets[presetKey];
        } else {
          return acc;
        }
      }, {});

      if (preset) setVisiblePreset(preset);
    }
  }

  function handleClose() {
    setVisiblePreset({});
    if (onClose) onClose();
  }

  return { visiblePreset, handleSelectPreset, isDemoJsonEmpty, handleClose };
}
