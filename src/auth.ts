type JSONResponse = {
  expires_in: number
}

export const validateAccessToken = async (
  accessToken?: string
): Promise<boolean> => {
  try {
    if (!accessToken) {
      return false
    }

    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )

    if (!response.ok) {
      return false
    }

    const data: JSONResponse = await response.json()

    return data.expires_in > 1800
  } catch (error) {
    return false
  }
}
