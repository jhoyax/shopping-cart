
/**
 * LinkHelpers class.
 * @class LinkHelpers
 */
export default class LinkHelpers {
	
  /**
   * Sets an absolute file path.
   * @method setAbsolutePath
   *
   * @param { string } url - the path to be set to an absolute.
   *
   * @return string
   */
  static setAbsolutePath(url: string): string {
    if (!url) {
      return url;
    }

    /**
     * If the url begins with a forward slash, set the path using the api domain, and
     * REACT_APP_PUBLIC_URL has value
     */
    if (
      url.charAt(0) === '/' && 
      process.env.REACT_APP_PUBLIC_URL
    ) {
      url = `${process.env.REACT_APP_PUBLIC_URL}${url}`;
    }

    return url;
  }
}