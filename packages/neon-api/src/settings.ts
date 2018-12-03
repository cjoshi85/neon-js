export const settings: { [key: string]: any } = {
  httpsOnly: true
};

export function set(newSettings: { [key: string]: any }) {
  Object.keys(settings).forEach(key => {
    if (newSettings.hasOwnProperty(key)) {
      settings[key] = !!newSettings[key];
    }
  });
}

export default settings;
