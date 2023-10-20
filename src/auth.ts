export const validateAccessToken = async (
  accessToken: string
): Promise<boolean> => {
  try {
    await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
    return true
  } catch (error) {
    return false
  }
}
