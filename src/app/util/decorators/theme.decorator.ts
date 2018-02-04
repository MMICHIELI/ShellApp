/**
 * Created by mmichieli on 04/02/2018.
 */
export function Theme() {

  return (target: any, key: string) => {

    // Check if the data exist in the local storage
    function exist(dataKey: string) {
      return localStorage.hasOwnProperty(dataKey);
    }

    // Get data from local storage
    function get(theme: string) {
      return exist(theme) ? JSON.parse(localStorage.getItem(theme)) : null;
    }

    // Set data in the local storage and return it
    function setDefault(theme: any): string {
      localStorage.setItem('theme', JSON.stringify(theme));
      return theme;
    }

    Object.defineProperty(target, key, {
      configurable: false,
      get: () => exist('theme') ? get('theme') : setDefault('terapy')
    });
  };

}
