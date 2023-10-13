"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const formSchema = z.object({});

const CreatePage = () => {
  return <div>Create Page</div>;
};

export default CreatePage;
