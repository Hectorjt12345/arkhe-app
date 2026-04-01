import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api';

const App = () => {
  const [assetId, setAssetId] = useState('');

  const handleGenerateAsset = async () => {
    try {
      const id = await invoke('generate_asset');
      setAssetId(id);
    } catch (error) {
      console.error('Error generating asset:', error);
    }
  };

  return (
    <div>
      <h1>Asset Generator</h1>
      <button onClick={handleGenerateAsset}>Generate Asset</button>
      {assetId && <p>Generated Asset ID: {assetId}</p>}
    </div>
  );
};

export default App;