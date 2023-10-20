export const validateAccessToken = async (
  accessToken: string
): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
    return response.ok
  } catch (error) {
    return false
  }
}
